"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Confetti from "react-confetti";

const REEL_COUNT = 3;
const SPIN_COST = 10;
const WIN_PAYOUT = 100;
const SMALL_PAYOUT = 20;
const INITIAL_CREDITS = 100;
const SPIN_DURATION_PER_REEL = 1000;

type ResultType = "info" | "win" | "lose" | "gameover";

interface ResultState {
  message: string;
  type: ResultType;
}

const useAudio = (src: string, loop = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = loop;
    audioRef.current = audio;
  }, [src, loop]);

  const play = useCallback(() => {
    audioRef.current?.play().catch((e) => console.log("Audio play failed:", e));
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return { play, stop };
};

const Jackpot = () => {
  const [reels, setReels] = useState<string[]>(() =>
    Array(REEL_COUNT).fill("⭐"),
  );
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [credits, setCredits] = useState<number>(INITIAL_CREDITS);
  const [result, setResult] = useState<ResultState>({
    message: "Click Spin to Play!",
    type: "info",
  });
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [history, setHistory] = useState<{ reels: string[]; payout: number }[]>(
    [],
  );

  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([]);
  const spinSound = useAudio("/sounds/spin-loop.mp3", true);
  const stopSound = useAudio("/sounds/reel-stop.mp3");
  const winSound = useAudio("/sounds/win.mp3");
  const loseSound = useAudio("/sounds/lose.mp3");

  useEffect(() => {
    const intervals = intervalRefs.current;
    return () => {
      intervals.forEach((ref) => ref && clearInterval(ref));
    };
  }, []);

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("jackpotCredits");
      if (stored) {
        const v = parseInt(stored, 10);
        if (!Number.isNaN(v)) {
          setCredits(v);
        }
      }
    } catch {
      void 0;
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("jackpotCredits", String(credits));
    } catch {
      void 0;
    }
  }, [credits]);

  const SYMBOL_WEIGHTS: Record<string, number> = {
    "🍒": 30,
    "🍋": 25,
    "🍊": 20,
    "🍉": 15,
    "🔔": 7,
    "🍀": 2,
    "⭐": 1,
  };
  const getWeightedSymbol = (): string => {
    const entries = Object.entries(SYMBOL_WEIGHTS);
    const total = entries.reduce((acc, [, w]) => acc + w, 0);
    const r = Math.random() * total;
    let sum = 0;
    for (let i = 0; i < entries.length; i++) {
      sum += entries[i][1];
      if (r <= sum) return entries[i][0];
    }
    return entries[entries.length - 1][0];
  };

  const handleSpin = async () => {
    if (isSpinning || credits < SPIN_COST) return;

    setIsSpinning(true);
    setCredits((prev) => prev - SPIN_COST);
    setResult({ message: "Spinning...", type: "info" });
    spinSound.play();

    for (let i = 0; i < REEL_COUNT; i++) {
      intervalRefs.current[i] = setInterval(() => {
        setReels((prev) => {
          const newReels = [...prev];
          newReels[i] = getWeightedSymbol();
          return newReels;
        });
      }, 75);
    }

    const finalReels: string[] = [];
    for (let i = 0; i < REEL_COUNT; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, SPIN_DURATION_PER_REEL),
      );
      if (intervalRefs.current[i]) {
        clearInterval(intervalRefs.current[i]!);
        intervalRefs.current[i] = null;
      }
      stopSound.play();
      const finalSymbol = getWeightedSymbol();
      finalReels.push(finalSymbol);
      setReels((prev) => {
        const newReels = [...prev];
        newReels[i] = finalSymbol;
        return newReels;
      });
    }

    spinSound.stop();

    const isJackpot = finalReels.every((s) => s === finalReels[0]);
    const counts = finalReels.reduce<Record<string, number>>((acc, s) => {
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {});
    const hasPair = Object.values(counts).some((c) => c === 2);
    if (isJackpot) {
      winSound.play();
      setCredits((prev) => prev + WIN_PAYOUT);
      setResult({ message: `Jackpot! +${WIN_PAYOUT} credits!`, type: "win" });
      setHistory((h) =>
        [{ reels: finalReels, payout: WIN_PAYOUT }, ...h].slice(0, 5),
      );
    } else if (hasPair) {
      setCredits((prev) => prev + SMALL_PAYOUT);
      setResult({
        message: `Nice! Two-of-a-kind +${SMALL_PAYOUT}`,
        type: "info",
      });
      setHistory((h) =>
        [{ reels: finalReels, payout: SMALL_PAYOUT }, ...h].slice(0, 5),
      );
    } else {
      loseSound.play();
      const newResult =
        credits - SPIN_COST < SPIN_COST
          ? { message: "Game Over!", type: "gameover" as ResultType }
          : { message: "So close! Try Again!", type: "lose" as ResultType };
      setResult(newResult);
      setHistory((h) => [{ reels: finalReels, payout: 0 }, ...h].slice(0, 5));
    }

    setIsSpinning(false);
  };

  const resetGame = () => {
    setCredits(INITIAL_CREDITS);
    setReels(Array(REEL_COUNT).fill("⭐"));
    setResult({ message: "Click Spin to Play!", type: "info" });
    setHistory([]);
  };

  const isGameOver = credits < SPIN_COST && !isSpinning;

  const resultClasses: Record<ResultType, string> = {
    win: "text-green-400 animate-pulse",
    lose: "text-red-400",
    info: "text-light-gray",
    gameover: "text-brand",
  };

  return (
    <div className="bg-surface text-foreground flex w-full max-w-md flex-col items-center justify-center rounded-2xl p-8 shadow-2xl">
      {result.type === "win" && (
        <Confetti
          width={size.width}
          height={size.height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <div className="mb-4 text-center">
        <h1 className="text-brand text-4xl font-bold">{"Karan's Jackpot"} </h1>
        <div className="text-light-gray mt-2 flex items-center justify-center gap-3 text-lg">
          <span>Credits:</span>
          <span className="bg-background text-brand rounded-full px-3 py-1 font-bold">
            {credits}
          </span>
        </div>
      </div>

      <div className="bg-surface mb-6 rounded-lg p-4 shadow-inner">
        <div className="flex gap-4">
          {reels.map((symbol, index) => (
            <div
              key={index}
              className={`border-border bg-background flex h-28 w-28 items-center justify-center rounded-lg border-4 text-6xl transition-all duration-300 ${isSpinning ? "blur-sm" : ""} ${result.type === "win" ? "animate-bounce border-green-400" : ""} `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mb-4 min-h-10 text-2xl font-bold transition-colors ${
          resultClasses[result.type]
        }`}
        aria-live="polite"
      >
        {result.message}
      </div>

      <div className="flex w-full items-center gap-3">
        {isGameOver ? (
          <button
            className="bg-brand text-background w-full cursor-pointer rounded-full px-10 py-3 text-lg font-bold shadow-md transition-transform hover:-translate-y-1 hover:opacity-90"
            onClick={resetGame}
            aria-label="Play again"
          >
            Play Again
          </button>
        ) : (
          <button
            className="bg-brand text-background w-full cursor-pointer rounded-full px-10 py-3 text-lg font-bold shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:opacity-90 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
            onClick={handleSpin}
            disabled={isSpinning || credits < SPIN_COST}
            aria-label="Spin"
          >
            {isSpinning ? "Spinning..." : `Spin (${SPIN_COST} Credits)`}
          </button>
        )}
        <button
          className="border-border text-light-gray hover:bg-surface rounded-full border px-5 py-3 text-sm font-semibold transition"
          onClick={resetGame}
          aria-label="Reset credits"
        >
          Reset
        </button>
      </div>

      <div className="bg-surface mt-6 w-full rounded-lg p-4">
        <div className="text-foreground mb-2 text-sm font-semibold">
          Recent Spins
        </div>
        {history.length === 0 ? (
          <div className="text-light-gray text-sm">No spins yet</div>
        ) : (
          <ul className="space-y-2">
            {history.map((h, idx) => (
              <li
                key={idx}
                className="bg-background flex items-center justify-between rounded-md px-3 py-2"
              >
                <span className="text-xl">{h.reels.join(" ")}</span>
                <span
                  className={`text-sm font-bold ${
                    h.payout > 0 ? "text-green-400" : "text-light-gray"
                  }`}
                >
                  {h.payout > 0 ? `+${h.payout}` : "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Jackpot;
