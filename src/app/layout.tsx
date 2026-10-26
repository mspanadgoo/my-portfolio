import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ThemeToggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { profile } from "@/lib/data";
import { buildJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });
const { name, headline, summary } = profile.personalInfo;
const defaultTitle = `${name} | ${headline}`;

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${name}`,
  },
  description: summary,
  keywords: [
    "Mohammad Sadegh Panadgoo",
    "Senior iOS Engineer",
    "Front-End Engineer",
    "Swift",
    "SwiftUI",
    "UIKit",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Fintech",
    "Payments",
    "Sadad PSP",
    "Bank Melli",
    "Tehran",
  ],
  authors: [{ name }],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: summary,
    url: SITE_URL,
    siteName: name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: summary,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ThemeToggle />
        {process.env.VERCEL ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
