import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Sadegh Panadgoo | Senior Software Engineer | Portfolio",
  description:
    "The personal portfolio of Mohammad Sadegh Panadgoo, a Senior Software Engineer with 10+ years of experience in mobile (iOS, React Native) and web development. Explore my projects and experience.",
  keywords:
    "Mohammad Sadegh Panadgoo, Senior Software Engineer, React Native Developer, iOS Developer, Next.js, Portfolio, Iran, Tehran",
  authors: [{ name: "Mohammad Sadegh Panadgoo" }],
  metadataBase: new URL("https://mspanadgoo.ir"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
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
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Sadad PSP Co.",
    },
    sameAs: [
      "https://linkedin.com/in/mspanadgoo",
      "https://github.com/mspanadgoo",
    ],
    alumniOf: "Azad University",
    nationality: "Iranian",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Add the script tag here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
