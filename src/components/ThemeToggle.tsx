"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        const isDark = saved === "dark";
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
      } else {
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    } catch {
      void 0;
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      void 0;
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="border-border bg-surface/80 text-foreground fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border shadow-md backdrop-blur transition hover:scale-105"
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
