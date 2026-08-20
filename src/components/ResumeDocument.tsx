import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type {
  Education,
  Experience,
  Language,
  PersonalInfo,
  Project,
  SkillCategory,
} from "@/lib/data/types";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingHorizontal: 40,
    paddingBottom: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#000",
    position: "relative",
  },
  footer: {
    position: "absolute",
    bottom: 25,
    left: 45,
    right: 45,
    textAlign: "center",
    fontSize: 9,
    color: "#777",
    borderTop: "1px solid #eee",
    paddingTop: 10,
  },
  headerContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: "#000",
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 9,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    marginRight: 5,
  },
  muted: {
    color: "#333",
    marginRight: 5,
  },
  separator: {
    marginHorizontal: 5,
    color: "#ccc",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 4,
    borderBottom: "1px solid #000",
    paddingBottom: 2,
  },
  entry: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000",
  },
  company: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  dates: {
    fontSize: 10,
    color: "#666",
    fontStyle: "italic",
  },
  description: {
    fontSize: 10,
    textAlign: "left",
    color: "#000",
  },
  bullet: {
    fontSize: 10,
    textAlign: "left",
    color: "#000",
    marginTop: 2,
    paddingLeft: 8,
  },
  skillsCategory: {
    marginBottom: 8,
  },
  skillsTitle: {
    fontWeight: "bold",
    fontSize: 11,
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 10,
    color: "#000",
    lineHeight: 1.3,
  },
  langRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  langCol: {
    width: "30%",
  },
});

type ResumeDocumentProps = {
  personalInfo: PersonalInfo;
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  languages: Language[];
  lastUpdated: string;
};

const resumeProjects = (projects: Project[]) =>
  projects.filter((project) => project.featured).slice(0, 4);

const ResumeDocument = ({
  personalInfo,
  skills,
  experiences,
  education,
  projects,
  lastUpdated,
  languages,
}: ResumeDocumentProps) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.footer} fixed>
        Last updated {lastUpdated}
      </Text>

      <View style={styles.headerContainer}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.headline}</Text>
        <View style={styles.contactInfo}>
          <Link style={styles.link} src={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </Link>
          <Text style={styles.separator}>|</Text>
          <Link style={styles.link} src="tel:+989126185482">
            +989126185482
          </Link>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.muted}>
            {personalInfo.location || "Tehran, Iran"}
          </Text>
          <Text style={styles.separator}>|</Text>
          <Link style={styles.link} src={personalInfo.linkedin}>
            LinkedIn
          </Link>
          <Text style={styles.separator}>|</Text>
          <Link style={styles.link} src={personalInfo.github}>
            GitHub
          </Link>
          <Text style={styles.separator}>|</Text>
          <Link style={styles.link} src="https://mspanadgoo.ir">
            mspanadgoo.ir
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.description}>{personalInfo.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {skills.map((skill) => (
          <View key={skill.category} style={styles.skillsCategory} wrap={false}>
            <Text style={styles.skillsTitle}>{skill.category}:</Text>
            <Text style={styles.skillsList}>
              {skill.subcategories
                .map((sub) => sub.items.join(", "))
                .join(", ")}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Work Experience</Text>
      {experiences.map((exp) => (
        <View key={exp.company} style={styles.entry} wrap>
          <View style={styles.company}>
            <Text style={styles.jobTitle}>
              {exp.title} | {exp.company}
            </Text>
            <Text style={styles.dates}>{exp.dates}</Text>
          </View>
          {exp.bullets.map((bullet) => (
            <Text key={bullet} style={styles.bullet}>
              {`• ${bullet}`}
            </Text>
          ))}
        </View>
      ))}

      <Text style={styles.sectionTitle}>Featured Projects</Text>
      {resumeProjects(projects).map((proj) => (
        <View key={proj.title} style={styles.entry} wrap>
          <Text style={styles.jobTitle}>{proj.title}</Text>
          <Text style={styles.description}>{proj.description}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Education</Text>
      {education.map((edu) => (
        <View key={edu.degree} style={styles.entry} wrap={false}>
          <View style={styles.company}>
            <Text style={styles.jobTitle}>{edu.degree}</Text>
            <Text style={styles.dates}>{edu.dates}</Text>
          </View>
          <Text>{edu.university}</Text>
        </View>
      ))}

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.langRow}>
          {languages.map((lang) => (
            <View key={lang.language} style={styles.langCol}>
              <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                {lang.language}
              </Text>
              <Text style={{ fontSize: 10, color: "#555" }}>
                {lang.proficiency}
              </Text>
              <Text style={{ fontSize: 9, color: "#777" }}>{lang.detail}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
