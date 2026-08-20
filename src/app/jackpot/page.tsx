import Jackpot from "@/components/Jackpot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karan's Jackpot",
  description:
    "A fun client-side jackpot game built with Next.js, TypeScript, and Tailwind CSS for my dear son Karan.",
};

const JackpotPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900">
      <Jackpot />
    </main>
  );
};

export default JackpotPage;
