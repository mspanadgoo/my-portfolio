import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ThemeToggle";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Mohammad Sadegh Panadgoo | Lead Software Engineer",
  description:
    "Lead Software Engineer based in Tehran. Native iOS, Next.js, NestJS, and event-driven backends with NATS — currently Principal Software Engineer at Sadad Electronic Payment.",
  keywords:
    "Mohammad Sadegh Panadgoo, Lead Software Engineer, Principal Software Engineer, Sadad, iOS, Next.js, NestJS, NATS, Tehran",
  authors: [{ name: "Mohammad Sadegh Panadgoo" }],
  metadataBase: new URL("https://mspanadgoo.ir"),
  alternates: {
    canonical: "/",
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
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Sadegh Panadgoo | Lead Software Engineer",
    description:
      "Native iOS, Next.js, NestJS, and event-driven backends with NATS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Sadegh Panadgoo",
    url: "https://mspanadgoo.ir",
    image: "https://mspanadgoo.ir/profile.png",
    email: "mailto:mspanadgoo@me.com",
    jobTitle: "Lead Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Sadad Electronic Payment",
      logo: "https://mspanadgoo.ir/logo.svg",
    },
    sameAs: [
      "https://linkedin.com/in/mspanadgoo",
      "https://github.com/mspanadgoo",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Azad University",
    },
    nationality: "Iranian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tehran",
      addressCountry: "IR",
    },
  };

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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
