import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import type { Profile, Project } from "@/lib/data";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";

function isInternalLink(href: string) {
  return href.startsWith("/");
}

function FeaturedCard({
  project,
  hero = false,
}: {
  project: Project;
  hero?: boolean;
}) {
  const hasLink = Boolean(project.link);
  const internal = hasLink && isInternalLink(project.link!);
  const iranOnly = project.linkAvailability === "iran-only";
  const content = (
    <article
      className={`border-border bg-background overflow-hidden rounded-lg border ${
        hero ? "flex flex-col sm:flex-row" : "flex h-full flex-col"
      }`}
    >
      <div
        className={
          hero
            ? "border-border relative aspect-video w-full overflow-hidden border-b bg-[#0B1B3B] sm:aspect-auto sm:h-auto sm:w-72 sm:shrink-0 sm:self-stretch sm:border-r sm:border-b-0"
            : "border-border relative aspect-video w-full overflow-hidden border-b bg-[#0B1B3B]"
        }
      >
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes={
            hero
              ? "(min-width: 640px) 288px, 100vw"
              : "(min-width: 640px) 50vw, 100vw"
          }
          className={hero ? "object-contain" : "object-cover"}
        />
      </div>
      <div className="flex grow flex-col p-4">
        <h3 className="text-foreground font-bold">{project.title}</h3>
        <p className="text-light-gray mt-2 grow text-sm">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface text-foreground rounded-full px-2.5 py-1 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        {iranOnly && project.linkNote ? (
          <p className="text-light-gray mt-3 text-xs">{project.linkNote}</p>
        ) : null}
      </div>
    </article>
  );

  if (!hasLink || iranOnly) {
    return content;
  }

  const className =
    "block rounded-lg transition-opacity hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

  if (internal) {
    return (
      <Link href={project.link!} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
}

export default function ResumeView({ data }: { data: Profile }) {
  const { personalInfo, skills, experiences, projects, education, languages } =
    data;
  const featured = projects.filter((project) => project.featured);
  const [heroProject, ...otherFeatured] = featured;

  return (
    <div className="bg-background min-h-screen">
      <a
        href="#content"
        className="bg-brand text-background focus-visible:ring-foreground sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:outline-none"
      >
        Skip to content
      </a>
      <div className="h-44 bg-gradient-to-br from-[#0B1B3B] via-[#0B1B3B] to-[#14284D] md:h-56" />

      <div className="mx-auto max-w-4xl px-4 pb-16 antialiased sm:px-6">
        <header className="bg-surface border-border relative -mt-16 mb-6 rounded-xl border p-6 shadow-sm md:-mt-20 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <Image
              src="/profile.png"
              alt={`Portrait of ${personalInfo.name}`}
              width={384}
              height={384}
              sizes="(min-width: 768px) 144px, 112px"
              className="border-surface bg-background -mt-16 h-28 w-28 shrink-0 rounded-full border-4 object-cover md:-mt-20 md:h-36 md:w-36"
              priority
            />
            <div className="min-w-0 flex-1 md:pt-1">
              <h1 className="text-foreground text-3xl font-bold">
                {personalInfo.name}
              </h1>
              <p className="text-foreground mt-1 text-lg">
                {personalInfo.headline}
              </p>
              <p className="text-light-gray mt-2 text-sm">
                {personalInfo.company}
              </p>
              <p className="text-light-gray mt-2 flex items-center gap-1.5 text-sm">
                <FiMapPin aria-hidden />
                {personalInfo.location}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${personalInfo.name} on LinkedIn`}
                    className="text-light-gray hover:text-brand focus-visible:ring-foreground rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${personalInfo.name} on GitHub`}
                    className="text-light-gray hover:text-brand focus-visible:ring-foreground rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-light-gray focus-visible:ring-foreground rounded-sm text-sm hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <ResumeDownloadButton />
              </div>
            </div>
          </div>
        </header>

        <main id="content" className="space-y-6">
          <section
            id="about"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h2 className="text-foreground mb-4 text-xl font-bold">About</h2>
            <p className="text-foreground leading-relaxed">
              {personalInfo.summary}
            </p>
          </section>

          <section
            id="featured"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h2 className="text-foreground mb-6 text-xl font-bold">Featured</h2>
            <div className="space-y-6">
              {heroProject ? <FeaturedCard project={heroProject} hero /> : null}
              {otherFeatured.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {otherFeatured.map((project) => (
                    <FeaturedCard key={project.title} project={project} />
                  ))}
                </div>
              ) : null}
            </div>
          </section>

          <section
            id="experience"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h2 className="text-foreground mb-6 text-xl font-bold">
              Experience
            </h2>
            <div className="divide-border divide-y">
              {experiences.map((exp) => (
                <article
                  key={`${exp.company}-${exp.title}`}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-foreground text-lg font-bold">
                      {exp.title}
                    </h3>
                    <p className="text-light-gray shrink-0 text-right text-sm">
                      {exp.dates}
                    </p>
                  </div>
                  {exp.linkAvailability === "iran-only" ? (
                    <p className="text-brand mt-0.5 font-semibold">
                      {exp.company}
                      {exp.linkNote ? (
                        <span className="text-light-gray mt-1 block text-xs font-normal">
                          {exp.linkNote}
                        </span>
                      ) : null}
                    </p>
                  ) : (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand focus-visible:ring-foreground mt-0.5 flex items-center gap-1.5 rounded-sm font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      {exp.company} <FiExternalLink aria-hidden />
                    </a>
                  )}
                  <p className="text-light-gray text-sm">{exp.location}</p>
                  <ul className="text-foreground mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h2 className="text-foreground mb-6 text-xl font-bold">
              Education
            </h2>
            <div className="divide-border divide-y">
              {education.map((edu) => (
                <article key={edu.degree} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-foreground text-lg font-bold">
                      {edu.degree}
                    </h3>
                    <p className="text-light-gray shrink-0 text-right text-sm">
                      {edu.dates}
                    </p>
                  </div>
                  <p className="text-brand font-semibold">{edu.university}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className="bg-surface border-border rounded-xl border p-6 shadow-sm md:p-8"
          >
            <h2 className="text-foreground mb-6 text-xl font-bold">Skills</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h3 className="text-foreground mb-3 font-semibold">
                    {skill.category}
                  </h3>
                  <div className="space-y-4">
                    {skill.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <p className="text-brand mb-2 text-sm font-medium">
                          {sub.title}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="bg-background text-foreground rounded-full px-3 py-1 text-sm"
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
            <h2 className="text-foreground mb-6 text-xl font-bold">
              Languages
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {languages.map((lang) => (
                <div key={lang.language}>
                  <h3 className="text-foreground font-bold">{lang.language}</h3>
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
          <p className="mt-2">
            <a
              href="/resume.pdf"
              className="hover:text-brand focus-visible:ring-foreground rounded-sm hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Resume PDF
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
