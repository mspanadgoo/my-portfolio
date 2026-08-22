"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import type { Profile } from "@/lib/data";

function resumeFileName(name: string, title: string) {
  const slug = `${name}-${title}`
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug}.pdf`;
}

const ResumeDownloadButton = ({ data }: { data: Profile }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { personalInfo, skills, experiences, education, projects, languages } =
    data;

  return (
    <>
      {isClient ? (
        <PDFDownloadLink
          document={
            <ResumeDocument
              personalInfo={personalInfo}
              skills={skills}
              experiences={experiences}
              education={education}
              projects={projects}
              languages={languages}
              lastUpdated={lastUpdated}
            />
          }
          fileName={resumeFileName(personalInfo.name, personalInfo.headline)}
          className="bg-brand text-background inline-block shrink-0 rounded-lg px-5 py-2 text-sm font-bold whitespace-nowrap transition-colors hover:opacity-90"
        >
          {({ loading }) => (loading ? "Generating PDF..." : "Download Resume")}
        </PDFDownloadLink>
      ) : (
        <button
          className="inline-block shrink-0 cursor-not-allowed rounded-lg bg-gray-500 px-5 py-2 text-sm font-bold whitespace-nowrap text-white opacity-70"
          disabled
        >
          Loading...
        </button>
      )}
    </>
  );
};

export default ResumeDownloadButton;
