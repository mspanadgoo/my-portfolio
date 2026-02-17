"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";

const ResumeDownloadButton = dynamic(
  () => import("@/components/ResumeDownloadButton"),
  { ssr: false },
);

export default function ResumeView({ data }) {
  const router = useRouter();

  const {
    personalInfo,
    skills,
    experiences,
    projects,
    education,
    languages,
    spotlight,
  } = data;

  return (
    <div className="mx-auto max-w-5xl p-8 antialiased">
      {/* Hero Section */}
      <header className="mb-16 flex flex-col items-center md:flex-row md:items-start">
        <Image
          src="/profile.png"
          alt={personalInfo.name}
          width={150}
          height={150}
          className="border-border bg-background mr-0 mb-4 cursor-pointer rounded-full border-2 md:mr-8 md:mb-0"
          priority
        />
        <div className="text-center md:text-left">
          <h1 className="text-brand text-4xl font-bold">{personalInfo.name}</h1>
          <h2 className="text-foreground mt-2 text-xl">{personalInfo.title}</h2>
          <p className="text-foreground mt-4">{personalInfo.summary}</p>
          <div className="mt-6 flex justify-center space-x-4 md:justify-start">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-brand transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-brand transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-light-gray hover:text-brand transition-colors"
            >
              <MdEmail size={28} />
            </a>
          </div>

          {/* PASS THE DATA PROP TO THE BUTTON */}
          <ResumeDownloadButton data={data} />
        </div>
      </header>

      {/* Spotlight Section - Only render if data exists in this profile */}
      {spotlight && (
        <section className="bg-surface mb-16 rounded-lg p-8 shadow-lg">
          <h3 className="text-brand mb-4 text-2xl font-bold">
            {spotlight.title}
          </h3>
          <p className="text-light-gray mb-6">{spotlight.description}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-foreground mb-2 font-semibold">
                {spotlight.responsibilities.title}
              </h4>
              <ul className="text-light-gray list-inside list-disc space-y-2">
                {spotlight.responsibilities.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2 font-semibold">
                {spotlight.technologies.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {spotlight.technologies.items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface text-brand rounded-full px-3 py-1 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <main>
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h3 className="border-brand/30 text-brand mb-8 border-b-2 pb-2 text-3xl font-bold">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-surface flex transform flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="border-border h-48 w-full rounded-t-lg border-b object-cover"
                    unoptimized={true}
                  />
                </a>
                <div className="flex grow flex-col p-6">
                  <h4 className="text-foreground text-xl font-bold">
                    {project.title}
                  </h4>
                  <p className="text-foreground mt-2 grow text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface text-brand rounded-full px-2.5 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand mt-6 inline-block font-semibold transition-colors hover:opacity-80"
                  >
                    Visit Site &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h3 className="border-brand/30 text-brand mb-6 border-b-2 pb-2 text-3xl font-bold">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="text-foreground mb-4 text-xl font-semibold">
                  {skill.category}
                </h4>

                {skill.subcategories && (
                  <div className="space-y-4">
                    {skill.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <h5 className="text-md text-brand mb-2 font-medium">
                          {sub.title}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="bg-surface text-light-gray rounded-full px-3 py-1 text-sm font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="mb-20">
          <h3 className="border-brand/30 text-brand mb-6 border-b-2 pb-2 text-3xl font-bold">
            Languages
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {languages.map((lang) => (
              <div
                key={lang.language}
                className="bg-surface rounded-lg p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <h4 className="text-foreground text-xl font-bold">
                  {lang.language}
                </h4>
                <p className="text-md text-brand mt-1 font-semibold">
                  {lang.proficiency}
                </p>
                <p className="text-foreground mt-2 text-sm">{lang.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h3 className="border-brand/30 text-brand mb-8 border-b-2 pb-2 text-3xl font-bold">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="bg-brand flex h-8 w-8 items-center justify-center rounded-full">
                      <div className="bg-background h-3 w-3 rounded-full"></div>
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="bg-border h-full w-px"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-foreground text-xl font-bold">
                    {exp.title}
                  </h4>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-brand flex items-center gap-2 font-semibold hover:underline"
                  >
                    {exp.company} <FiExternalLink />
                  </a>
                  <p className="text-light-gray mb-2 text-sm">{exp.dates}</p>
                  <p className="text-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h3 className="border-brand/30 text-brand mb-8 border-b-2 pb-2 text-3xl font-bold">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="bg-brand flex h-8 w-8 items-center justify-center rounded-full">
                      <div className="bg-background h-3 w-3 rounded-full"></div>
                    </div>
                  </div>
                  {index < education.length - 1 && (
                    <div className="bg-border h-full w-px"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-foreground text-xl font-bold">
                    {edu.degree}
                  </h4>
                  <p className="text-md text-brand font-semibold">
                    {edu.university}
                  </p>
                  <p className="text-light-gray mb-2 text-sm">{edu.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-light-gray mt-16 text-center">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-brand transition-colors"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
