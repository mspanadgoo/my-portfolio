"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import {
  personalInfo,
  skills,
  experiences,
  education,
  projects,
  languages,
} from "@/lib/data";

const ResumeDownloadButton = () => {
  const [isClient, setIsClient] = useState(false);

  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  useEffect(() => {
    setIsClient(true);
    setProfilePictureUrl(`${window.location.origin}/profile.png`);
  }, []);

  const generationDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              generationDate={generationDate}
              profilePictureUrl={profilePictureUrl}
            />
          }
          fileName={`${personalInfo.name.replace(" ", "-")}-Resume.pdf`}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition-colors hover:bg-blue-700"
        >
          {({ loading }: { loading: boolean }) =>
            loading ? "Generating PDF..." : "Download Resume"
          }
        </PDFDownloadLink>
      ) : (
        <button
          className="mt-6 inline-block cursor-not-allowed rounded-lg bg-gray-500 px-6 py-2 font-bold text-white opacity-70"
          disabled
        >
          Loading...
        </button>
      )}
    </>
  );
};

export default ResumeDownloadButton;
