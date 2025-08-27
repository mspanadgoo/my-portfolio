import {
  education,
  experiences,
  personalInfo,
  projects,
  skills,
} from "@/lib/data";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl p-8 antialiased">
      {/* Hero Section */}
      <header className="mb-16 flex flex-col items-center md:flex-row md:items-start">
        <Image
          src="/profile.png"
          alt="Mohammad Sadegh Panadgoo"
          width={150}
          height={150}
          className="mr-0 mb-4 rounded-full md:mr-8 md:mb-0"
          priority
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-400">
            {personalInfo.name}
          </h1>
          <h2 className="mt-2 text-xl text-gray-300">{personalInfo.title}</h2>
          <p className="mt-4 text-gray-400">{personalInfo.summary}</p>
          <div className="mt-6 flex justify-center space-x-4 md:justify-start">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 transition-colors hover:text-blue-400"
            >
              <MdEmail size={28} />
            </a>
          </div>
          {/* Optional Download button, uncomment if needed */}
          {/* <a href={personalInfo.resumePdf} download className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Download Resume
          </a> */}
        </div>
      </header>

      <main>
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h3 className="mb-8 border-b-2 border-blue-400/30 pb-2 text-3xl font-bold text-blue-400">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex transform flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105"
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
                    className="h-48 w-full object-cover"
                    unoptimized={true}
                  />
                </a>
                <div className="flex flex-grow flex-col p-6">
                  <h4 className="text-xl font-bold text-gray-400">
                    {project.title}
                  </h4>
                  {/* UPDATED: line-clamp ensures description doesn't get too long */}
                  <p className="mt-2 line-clamp-3 flex-grow text-sm text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-700 px-2.5 py-1 text-xs font-semibold text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block font-semibold text-blue-400 transition-colors hover:text-blue-300"
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
          <h3 className="mb-6 border-b-2 border-blue-400/30 pb-2 text-3xl font-bold text-blue-400">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="mb-4 text-xl font-semibold text-gray-200">
                  {skill.category}
                </h4>

                {skill.subcategories && (
                  <div className="space-y-4">
                    {skill.subcategories.map((sub) => (
                      <div key={sub.title}>
                        <h5 className="text-md mb-2 font-medium text-blue-400">
                          {sub.title}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300"
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

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h3 className="mb-8 border-b-2 border-blue-400/30 pb-2 text-3xl font-bold text-blue-400">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                      <div className="h-3 w-3 rounded-full bg-gray-900"></div>
                    </div>
                  </div>
                  {/* Hide the line for the last item in the list */}
                  {index < experiences.length - 1 && (
                    <div className="h-full w-px bg-gray-600"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-400">
                    {exp.title}
                  </h4>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md flex items-center gap-2 font-semibold text-blue-400 hover:underline"
                  >
                    {exp.company} <FiExternalLink />
                  </a>
                  <p className="mb-2 text-sm text-gray-500">{exp.dates}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h3 className="mb-8 border-b-2 border-blue-400/30 pb-2 text-3xl font-bold text-blue-400">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                      <div className="h-3 w-3 rounded-full bg-gray-900"></div>
                    </div>
                  </div>
                  {/* Hide the line for the last item in the list */}
                  {index < education.length - 1 && (
                    <div className="h-full w-px bg-gray-600"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-400">
                    {edu.degree}
                  </h4>
                  <p className="text-md font-semibold text-blue-400">
                    {edu.university}
                  </p>
                  <p className="mb-2 text-sm text-gray-500">{edu.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors hover:text-blue-400"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
