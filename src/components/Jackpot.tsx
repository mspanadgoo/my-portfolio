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
    info: "text-slate-400",
    gameover: "text-yellow-400",
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center rounded-2xl bg-slate-900 p-8 text-white shadow-2xl shadow-blue-500/20">
      {result.type === "win" && (
        <Confetti
          width={size.width}
          height={size.height}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
          {"Karan's Jackpot"}{" "}
        </h1>
        <div className="mt-2 flex items-center justify-center gap-3 text-lg text-slate-300">
          <span>Credits:</span>
          <span className="rounded-full bg-slate-800 px-3 py-1 font-bold text-yellow-400">
            {credits}
          </span>
        </div>
      </div>

      <div className="mb-6 rounded-lg bg-slate-800 p-4 shadow-inner">
        <div className="flex gap-4">
          {reels.map((symbol, index) => (
            <div
              key={index}
              className={`flex h-28 w-28 items-center justify-center rounded-lg border-4 border-slate-600 bg-slate-700 text-6xl transition-all duration-300 ${isSpinning ? "blur-sm" : ""} ${result.type === "win" ? "animate-bounce border-green-400" : ""} `}
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
            className="w-full cursor-pointer rounded-full bg-linear-to-br from-green-400 to-teal-500 px-10 py-3 text-lg font-bold text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            onClick={resetGame}
            aria-label="Play again"
          >
            Play Again
          </button>
        ) : (
          <button
            className="w-full cursor-pointer rounded-full bg-linear-to-br from-yellow-400 to-orange-500 px-10 py-3 text-lg font-bold text-white shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 disabled:translate-y-0 disabled:cursor-not-allowed disabled:from-slate-600 disabled:to-slate-700 disabled:opacity-70 disabled:shadow-none"
            onClick={handleSpin}
            disabled={isSpinning || credits < SPIN_COST}
            aria-label="Spin"
          >
            {isSpinning ? "Spinning..." : `Spin (${SPIN_COST} Credits)`}
          </button>
        )}
        <button
          className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          onClick={resetGame}
          aria-label="Reset credits"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 w-full rounded-lg bg-slate-800 p-4">
        <div className="mb-2 text-sm font-semibold text-slate-300">
          Recent Spins
        </div>
        {history.length === 0 ? (
          <div className="text-sm text-slate-500">No spins yet</div>
        ) : (
          <ul className="space-y-2">
            {history.map((h, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between rounded-md bg-slate-900 px-3 py-2"
              >
                <span className="text-xl">{h.reels.join(" ")}</span>
                <span
                  className={`text-sm font-bold ${
                    h.payout > 0 ? "text-green-400" : "text-slate-400"
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
