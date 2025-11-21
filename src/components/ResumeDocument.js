import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

Font.register({
  family: "Helvetica",
  fonts: [
    {
      src: `https://fonts.gstatic.com/s/helvetica/v11/TK3iWkU9c0w_hE0gYE6-0g.ttf`,
      fontWeight: "normal",
    },
    {
      src: `https://fonts.gstatic.com/s/helvetica/v11/TK3hWkU9c0w_hE0gYE6-0Y-B.ttf`,
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: "#555",
  },
  contactInfo: {
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    marginHorizontal: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottom: "2px solid #ddd",
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  entry: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  dates: {
    fontSize: 11,
    color: "#555",
  },
  description: {
    fontSize: 11,
  },
  skillsCategory: {
    marginBottom: 8,
  },
  skillsTitle: {
    fontWeight: "bold",
    fontSize: 11,
  },
  skillsList: {
    fontSize: 11,
  },
});

const ResumeDocument = ({
  personalInfo,
  skills,
  experiences,
  education,
  projects,
}) => (
  <Document>
    <Page style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Link style={styles.link} src={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </Link>
          <Text>|</Text>
          <Link style={styles.link} src={personalInfo.linkedin}>
            LinkedIn
          </Link>
          <Text>|</Text>
          <Link style={styles.link} src={personalInfo.github}>
            GitHub
          </Link>
          {/* === ADDED WEBSITE ADDRESS HERE === */}
          <Text>|</Text>
          <Link style={styles.link} src="https://mspanadgoo.ir">
            mspanadgoo.ir
          </Link>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.description}>{personalInfo.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {skills.map((skill) => (
          <View key={skill.category} style={styles.skillsCategory}>
            <Text style={styles.skillsTitle}>{skill.category}:</Text>
            <Text style={styles.skillsList}>
              {skill.subcategories
                .map((sub) => sub.items.join(", "))
                .join(", ")}
            </Text>
          </View>
        ))}
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {experiences.map((exp) => (
          <View key={exp.company} style={styles.entry}>
            <View style={styles.company}>
              <Text style={styles.jobTitle}>
                {exp.title} | {exp.company}
              </Text>
              <Text style={styles.dates}>{exp.dates}</Text>
            </View>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        {projects.slice(0, 4).map(
          (
            proj, // Show top 4 projects for brevity
          ) => (
            <View key={proj.title} style={styles.entry}>
              <Text style={styles.jobTitle}>{proj.title}</Text>
              <Text style={styles.description}>{proj.description}</Text>
            </View>
          ),
        )}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu) => (
          <View key={edu.degree} style={styles.entry}>
            <View style={styles.company}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.dates}>{edu.dates}</Text>
            </View>
            <Text>{edu.university}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
