import { profile } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export function buildJsonLd() {
  const { personalInfo, education } = profile;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: personalInfo.name,
        url: SITE_URL,
        image: `${SITE_URL}/profile.png`,
        email: `mailto:${personalInfo.email}`,
        jobTitle: personalInfo.headline,
        worksFor: {
          "@type": "Organization",
          name: "Sadad Electronic Payment",
        },
        sameAs: [personalInfo.linkedin, personalInfo.github],
        knowsAbout: [
          "iOS",
          "Swift",
          "SwiftUI",
          "UIKit",
          "Objective-C",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Front-end engineering",
          "Payments",
          "PSP",
          "Neobank",
          "Fintech",
        ],
        alumniOf: education.map((item) => ({
          "@type": "EducationalOrganization",
          name: item.university,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tehran",
          addressCountry: "IR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: personalInfo.name,
        url: SITE_URL,
        description: personalInfo.summary,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };
}
