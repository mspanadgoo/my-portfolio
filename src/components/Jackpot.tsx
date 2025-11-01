"use client"; // This is crucial for the App Router

import { useState, useRef, useEffect } from "react";

// --- Configuration ---
const SYMBOLS: string[] = ["🍒", "🍋", "🍊", "🍉", "🔔", "⭐", "🍀"];
const REEL_COUNT: number = 3;
const INITIAL_REELS: string[] = Array(REEL_COUNT).fill("⭐");
const SPIN_DURATION: number = 2000; // 2 seconds
const SPIN_INTERVAL: number = 75; // Symbol change speed

// --- TypeScript Types ---
type ResultType = "info" | "win" | "lose";

interface ResultState {
  message: string;
  type: ResultType;
}

const Jackpot = () => {
  const [reels, setReels] = useState<string[]>(INITIAL_REELS);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [result, setResult] = useState<ResultState>({
    message: "Click Spin to Play!",
    type: "info",
  });

  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, []);

  const getRandomSymbol = (): string => {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  };

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult({ message: "Spinning...", type: "info" });

    // Start the spinning animation for each reel
    intervalRefs.current = reels.map((_, i) =>
      setInterval(() => {
        setReels((prevReels) => {
          const newReels = [...prevReels];
          newReels[i] = getRandomSymbol();
          return newReels;
        });
      }, SPIN_INTERVAL),
    );

    // Stop spinning after a set duration and determine the result
    setTimeout(() => {
      intervalRefs.current.forEach(clearInterval); // Stop all intervals
      intervalRefs.current = [];

      const finalReels = Array.from({ length: REEL_COUNT }, getRandomSymbol);
      setReels(finalReels);

      // Check if all symbols in the final result are the same
      const isJackpot = finalReels.every((symbol) => symbol === finalReels[0]);
      if (isJackpot) {
        setResult({
          message: `Jackpot! You won with ${finalReels[0]}!`,
          type: "win",
        });
      } else {
        setResult({ message: "So close! Try Again!", type: "lose" });
      }

      setIsSpinning(false);
    }, SPIN_DURATION);
  };

  // Map result types to Tailwind CSS classes for easy styling
  const resultClasses: Record<ResultType, string> = {
    win: "text-green-400 animate-bounce",
    lose: "text-red-400",
    info: "text-slate-400",
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-800 p-8 text-white shadow-2xl">
      <h1 className="mb-6 text-4xl font-bold text-yellow-400 [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
        {"Karan's Jackpot"}
      </h1>

      <div className="mb-8 flex gap-4">
        {reels.map((symbol, index) => (
          <div
            key={index}
            className={`flex h-28 w-28 items-center justify-center rounded-lg border-4 border-slate-600 bg-slate-700 text-6xl shadow-inner transition-all duration-300 ${
              isSpinning ? "scale-95 blur-sm" : ""
            }`}
          >
            {symbol}
          </div>
        ))}
      </div>

      <button
        className="mb-6 cursor-pointer rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 px-10 py-3 text-lg font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:opacity-70 disabled:shadow-none"
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>

      <div className={`h-10 text-2xl font-bold ${resultClasses[result.type]}`}>
        {result.message}
      </div>
    </div>
  );
};

export default Jackpot;
