"use client";

import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";
import {
  personalInfo,
  skills,
  experiences,
  education,
  projects,
} from "@/lib/data";

const ResumeDownloadButton = () => {
  const generationDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PDFDownloadLink
      document={
        <ResumeDocument
          personalInfo={personalInfo}
          skills={skills}
          experiences={experiences}
          education={education}
          projects={projects}
          generationDate={generationDate}
        />
      }
      fileName={`${personalInfo.name.replace(" ", "-")}-Resume.pdf`}
      className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition-colors hover:bg-blue-700"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Generating PDF..." : "Download Resume"
      }
    </PDFDownloadLink>
  );
};

export default ResumeDownloadButton;
