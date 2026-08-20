"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import dynamic from "next/dynamic";
import type { Profile } from "@/lib/data";

const ResumeDownloadButton = dynamic(
  () => import("@/components/ResumeDownloadButton"),
  { ssr: false },
);

function isInternalLink(href: string) {
  return href.startsWith("/");
}

export default function ResumeView({ data }: { data: Profile }) {
  const { personalInfo, skills, experiences, projects, education, languages } =
    data;

  return (
    <div className="bg-background min-h-screen">
      <div className="h-44 bg-gradient-to-br from-[#0B1B3B] via-[#0B1B3B] to-[#14284D] md:h-56" />

      <div className="mx-auto max-w-3xl px-4 pb-16 antialiased sm:px-6">
        <header className="bg-surface border-border relative -mt-16 mb-6 rounded-xl border p-6 shadow-sm md:-mt-20 md:p-8">
          <Image
            src="/profile.png"
            alt={personalInfo.name}
            width={152}
            height={152}
            className="border-surface bg-background absolute -top-16 left-6 h-28 w-28 rounded-full border-4 object-cover md:-top-20 md:h-36 md:w-36"
            priority
          />
          <div className="mt-14 md:mt-16">
            <h1 className="text-foreground text-3xl font-bold">
              {personalInfo.name}
            </h1>
            <h2 className="text-foreground mt-1 text-lg">
              {personalInfo.headline}
            </h2>
            <p className="text-light-gray mt-2 text-sm">
              {personalInfo.title} at {personalInfo.company}
            </p>
            <p className="text-light-gray mt-2 flex items-center gap-1.5 text-sm">
              <FiMapPin aria-hidden />
              {personalInfo.location}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${personalInfo.name} on LinkedIn`}
                className="text-light-gray hover:text-brand transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${personalInfo.name} on GitHub`}
                className="text-light-gray hover:text-brand transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.name}`}
                className="text-light-gray hover:text-brand transition-colors"
              >
                <MdEmail size={24} />
              </a>
              <ResumeDownloadButton data={data} />
            </div>
          </div>
        </header>

        <main className="space-y-6">
          <section
            id="about"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-4 text-xl font-bold">About</h3>
            <p className="text-foreground leading-relaxed">
              {personalInfo.summary}
            </p>
          </section>

          <section
            id="featured"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-6 text-xl font-bold">Featured</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project) => {
                const internal = isInternalLink(project.link);
                const image = (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="border-border h-40 w-full rounded-t-lg border-b object-cover"
                  />
                );

                return (
                  <article
                    key={project.title}
                    className="border-border bg-background flex flex-col overflow-hidden rounded-lg border"
                  >
                    {internal ? (
                      <Link href={project.link}>{image}</Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {image}
                      </a>
                    )}
                    <div className="flex grow flex-col p-4">
                      <h4 className="text-foreground font-bold">
                        {project.title}
                      </h4>
                      <p className="text-light-gray mt-2 grow text-sm">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-surface text-brand rounded-full px-2.5 py-1 text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {internal ? (
                        <Link
                          href={project.link}
                          className="text-brand mt-4 inline-block text-sm font-semibold hover:opacity-80"
                        >
                          Play Game →
                        </Link>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand mt-4 inline-block text-sm font-semibold hover:opacity-80"
                        >
                          View →
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            id="experience"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-6 text-xl font-bold">
              Experience
            </h3>
            <div className="divide-border divide-y">
              {experiences.map((exp) => (
                <article
                  key={`${exp.company}-${exp.title}`}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <h4 className="text-foreground text-lg font-bold">
                    {exp.title}
                  </h4>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand mt-0.5 flex items-center gap-1.5 font-semibold hover:underline"
                  >
                    {exp.company} <FiExternalLink aria-hidden />
                  </a>
                  <p className="text-light-gray mt-1 text-sm">{exp.dates}</p>
                  <p className="text-light-gray text-sm">{exp.location}</p>
                  <p className="text-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-6 text-xl font-bold">
              Education
            </h3>
            <div className="divide-border divide-y">
              {education.map((edu) => (
                <article key={edu.degree} className="py-6 first:pt-0 last:pb-0">
                  <h4 className="text-foreground text-lg font-bold">
                    {edu.degree}
                  </h4>
                  <p className="text-brand font-semibold">{edu.university}</p>
                  <p className="text-light-gray mt-1 text-sm">{edu.dates}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-6 text-xl font-bold">Skills</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h4 className="text-foreground mb-3 font-semibold">
                    {skill.category}
                  </h4>
                  <div className="space-y-4">
                    {skill.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <h5 className="text-brand mb-2 text-sm font-medium">
                          {sub.title}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="bg-background text-light-gray rounded-full px-3 py-1 text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="languages"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h3 className="text-foreground mb-6 text-xl font-bold">
              Languages
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {languages.map((lang) => (
                <div key={lang.language}>
                  <h4 className="text-foreground font-bold">{lang.language}</h4>
                  <p className="text-brand text-sm font-semibold">
                    {lang.proficiency}
                  </p>
                  <p className="text-light-gray mt-1 text-sm">{lang.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-light-gray mt-12 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
