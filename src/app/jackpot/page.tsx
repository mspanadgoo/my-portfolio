import Jackpot from "@/components/Jackpot";
import Head from "next/head";

const JackpotPage = () => {
  return (
    <>
      <Head>
        <title>{"Karan's Jackpot"}</title>
        <meta
          name="description"
          content="A fun client-side jackpot game built with Next.js, TypeScript, and Tailwind CSS for my dear son Karan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-slate-900">
        <Jackpot />
      </main>
    </>
  );
};

export default JackpotPage;
