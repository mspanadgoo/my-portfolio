import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const personalInfo = {
  name: "Mohammad Sadegh Panadgoo",
  title: "Senior Software Engineer",
  summary:
    "A senior software engineer with over a decade of experience building and scaling high-quality applications. I specialize in crafting robust solutions for both mobile (iOS, React Native) and web platforms, with a focus on clean architecture and exceptional user experiences.",
  email: "mspanadgoo@me.com",
  linkedin: "https://linkedin.com/in/mspanadgoo",
  github: "https://github.com/mspanadgoo",
  resumePdf: "/Mohammad-Sadegh-Panadgoo-Resume.pdf",
};

const skills = [
  {
    category: "Mobile Development",
    items: [
      "React Native",
      "Swift",
      "SwiftUI",
      "UIKit",
      "Redux",
      "React Navigation",
    ],
  },
  {
    category: "Frontend Web",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Nest.js", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "CI/CD for Mobile", "Docker", "Jest"],
  },
];

const experiences = [
  {
    company: "Sadad PSP Co.",
    title: "Lead Software Engineer",
    dates: "06/2024 – Present",
    description:
      "Leading the technical vision for a high-traffic payment application, focusing on creating a fast and flawless mobile user experience.",
  },
  {
    company: "Sibbank Co.",
    title: "Senior Software Engineer",
    dates: "03/2024 – 06/2024",
    description:
      "Built the main iOS application for the Sibbank App Store from scratch using Swift, owning everything from architecture to final user experience.",
  },
  {
    company: "Behpardakht Mellat Co.",
    title: "Senior Software Engineer",
    dates: "02/2019 – 03/2024",
    description:
      "Led the complete technical migration of the legacy Sekkeh iOS payment application to a modern, clean MVVM architecture, improving startup time by 50%.",
  },
  {
    company: "Behsazan Mellat Co.",
    title: "Software Engineer",
    dates: "04/2015 – 02/2019",
    description:
      "Built the Mellat Mobile Bank iOS app from zero using Swift, delivering all core security and transaction features for one of Iran's largest banks.",
  },
];

const projects = [
  {
    title: "Paysib Currency Exchange",
    description:
      "Engineered a secure and high-performance currency exchange platform, allowing users to instantly trade major world currencies against the Iranian Rial.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Paysib",
    link: "https://paysib.com",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Fintech", "Security"],
  },
  {
    title: "Mellat Mobile Bank",
    description:
      "Developed the flagship native iOS application for one of Iran's largest banks, serving over 3 million users with a focus on security and performance.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Mellat+Mobile+Bank",
    link: "https://mobile.bankmellat.ir/mobile/ios.html",
    tags: ["Swift", "Security", "Fintech", "iOS"],
  },
  {
    title: "Ketabrah E-Reader",
    description:
      "Contributed to the native iOS application for a leading digital bookstore, enhancing the e-reading experience for thousands of users.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Ketabrah",
    link: "https://www.ketabrah.ir/apps",
    tags: ["Swift", "UIKit", "iOS"],
  },
  {
    title: "Sibbank App Store",
    description:
      "Architected and built the primary native iOS application from the ground up, leading the project from concept to App Store launch.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sibbank",
    link: "https://sibbank.com",
    tags: ["Swift", "MVVM", "iOS"],
  },
  {
    title: "Sekkeh Payment App",
    description:
      "Led the complete technical modernization of a legacy iOS payment app, improving startup time by 50% and boosting code quality.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sekkeh",
    link: "https://sekeh.behpardakht.com",
    tags: ["Swift", "Refactoring", "Performance"],
  },
  {
    title: "Iva Neobank Platform",
    description:
      "Designed the core frontend architecture for a new neobank platform, ensuring a scalable and maintainable system for both mobile and web clients.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Iva",
    link: "https://ivaapp.com",
    tags: ["Architecture", "React Native", "Next.js"],
  },
];
// --- END OF DATA ---

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 antialiased">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center md:items-start mb-16">
        <Image
          src="/profile.png"
          alt="Mohammad Sadegh Panadgoo"
          width={150}
          height={150}
          className="rounded-full mr-0 md:mr-8 mb-4 md:mb-0"
          priority
        />
        <div className="text-center md:text-left">
          {/* UPDATED: Color changed from teal to blue */}
          <h1 className="text-4xl font-bold text-blue-400">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl mt-2 text-gray-300">{personalInfo.title}</h2>
          <p className="mt-4 text-gray-400">{personalInfo.summary}</p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
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
          <h3 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-400/30 pb-2">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transform transition-transform hover:scale-105"
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
                    className="w-full h-48 object-cover"
                    unoptimized={true}
                  />
                </a>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-100">
                    {project.title}
                  </h4>
                  {/* UPDATED: line-clamp ensures description doesn't get too long */}
                  <p className="mt-2 text-gray-400 text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors"
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
          <h3 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-400/30 pb-2">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h3 className="text-3xl font-bold text-blue-400 mb-8 border-b-2 border-blue-400/30 pb-2">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  {/* Hide the line for the last item in the list */}
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-gray-600"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-400">
                    {exp.title}
                  </h4>
                  <p className="text-md font-semibold text-blue-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">{exp.dates}</p>
                  <p className="text-gray-400">{exp.description}</p>
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
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-blue-400 transition-colors"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
