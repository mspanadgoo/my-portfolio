"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Confetti from "react-confetti";

// --- Configuration ---
const SYMBOLS = ["🍒", "🍋", "🍊", "🍉", "🔔", "⭐", "🍀"];
const REEL_COUNT = 3;
const SPIN_COST = 10;
const WIN_PAYOUT = 100;
const INITIAL_CREDITS = 100;
const SPIN_DURATION_PER_REEL = 1000; // Each reel spins for 1 second
const REEL_STOP_DELAY = 500; // Delay between each reel stopping

// --- TypeScript Types ---
type ResultType = "info" | "win" | "lose" | "gameover";

interface ResultState {
  message: string;
  type: ResultType;
}

// --- Custom Hook for Audio ---
const useAudio = (src: string, loop = false) => {
  // Use a ref to hold the audio element so it persists across re-renders
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

  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([]);

  // --- Sound Effects ---
  const spinSound = useAudio("/sounds/spin-loop.mp3", true);
  const stopSound = useAudio("/sounds/reel-stop.mp3");
  const winSound = useAudio("/sounds/win.mp3");
  const loseSound = useAudio("/sounds/lose.mp3");

  // Cleanup intervals on component unmount
  useEffect(() => {
    return () => {
      intervalRefs.current.forEach((ref) => ref && clearInterval(ref));
    };
  }, []);

  const getRandomSymbol = (): string => {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  };

  const handleSpin = async () => {
    if (isSpinning || credits < SPIN_COST) return;

    setIsSpinning(true);
    setCredits((prev) => prev - SPIN_COST);
    setResult({ message: "Spinning...", type: "info" });
    spinSound.play();

    // Start all reels spinning visually
    for (let i = 0; i < REEL_COUNT; i++) {
      intervalRefs.current[i] = setInterval(() => {
        setReels((prev) => {
          const newReels = [...prev];
          newReels[i] = getRandomSymbol();
          return newReels;
        });
      }, 75);
    }

    // Stagger the stopping of each reel
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
      const finalSymbol = getRandomSymbol();
      finalReels.push(finalSymbol);
      setReels((prev) => {
        const newReels = [...prev];
        newReels[i] = finalSymbol;
        return newReels;
      });
    }

    spinSound.stop();

    // Determine the final result
    const isJackpot = finalReels.every((s) => s === finalReels[0]);
    if (isJackpot) {
      winSound.play();
      setCredits((prev) => prev + WIN_PAYOUT);
      setResult({ message: `Jackpot! +${WIN_PAYOUT} credits!`, type: "win" });
    } else {
      loseSound.play();
      const newResult =
        credits - SPIN_COST < SPIN_COST
          ? { message: "Game Over!", type: "gameover" as ResultType }
          : { message: "So close! Try Again!", type: "lose" as ResultType };
      setResult(newResult);
    }

    setIsSpinning(false);
  };

  const resetGame = () => {
    setCredits(INITIAL_CREDITS);
    setReels(Array(REEL_COUNT).fill("⭐"));
    setResult({ message: "Click Spin to Play!", type: "info" });
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
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={400}
        />
      )}

      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
          {"Karan's Jackpot"}
        </h1>
        <p className="mt-2 text-lg text-slate-300">
          Credits: <span className="font-bold text-yellow-400">{credits}</span>
        </p>
      </div>

      {/* The "Machine" frame */}
      <div className="mb-6 rounded-lg bg-slate-800 p-4 shadow-inner">
        <div className="flex gap-4">
          {reels.map((symbol, index) => (
            <div
              key={index}
              className={`flex h-28 w-28 items-center justify-center rounded-lg border-4 border-slate-600 bg-slate-700 text-6xl transition-all duration-300 ${isSpinning ? "blur-sm" : ""} ${result.type === "win" ? "animate-bounce border-green-400" : ""} `}
              style={{ animationDelay: `${index * 100}ms` }} // Staggered bounce on win
            >
              {symbol}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mb-6 h-10 text-2xl font-bold transition-colors ${resultClasses[result.type]}`}
      >
        {result.message}
      </div>

      {isGameOver ? (
        <button
          className="w-full cursor-pointer rounded-full bg-gradient-to-br from-green-400 to-teal-500 px-10 py-3 text-lg font-bold text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
          onClick={resetGame}
        >
          Play Again
        </button>
      ) : (
        <button
          className="w-full cursor-pointer rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 px-10 py-3 text-lg font-bold text-white shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 disabled:translate-y-0 disabled:cursor-not-allowed disabled:from-slate-600 disabled:to-slate-700 disabled:opacity-70 disabled:shadow-none"
          onClick={handleSpin}
          disabled={isSpinning}
        >
          {isSpinning ? "Spinning..." : `Spin (${SPIN_COST} Credits)`}
        </button>
      )}
    </div>
  );
};

export default Jackpot;
