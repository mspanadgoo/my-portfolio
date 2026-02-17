import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
  Image,
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 20,
  },
  headerText: {
    textAlign: "left",
    flex: 1,
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

const ResumeDocument = ({
  personalInfo,
  skills,
  experiences,
  education,
  projects,
  generationDate,
  profilePictureUrl,
  languages,
}) => (
  <Document>
    <Page style={styles.page}>
      {/* Footer */}
      <Text style={styles.footer} fixed>
        Generated on {generationDate || "Today"}
      </Text>

      {/* Header */}
      <View style={styles.headerContainer}>
        {profilePictureUrl && (
          <Image style={styles.profileImage} src={profilePictureUrl} />
        )}
        <View style={styles.headerText}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Link style={styles.link} src={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </Link>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>
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
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.description}>{personalInfo.summary}</Text>
      </View>

      {/* Technical Skills */}
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

      {/* 1. The Title */}
      <Text style={styles.sectionTitle}>Work Experience</Text>
      {experiences.map((exp) => (
        <View key={exp.company} style={styles.entry} wrap={true}>
          <View style={styles.company}>
            <Text style={styles.jobTitle}>
              {exp.title} | {exp.company}
            </Text>
            <Text style={styles.dates}>{exp.dates}</Text>
          </View>
          <Text style={styles.description}>{exp.description}</Text>
        </View>
      ))}

      {/* Projects - UNWRAPPED */}
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      {projects.slice(0, 4).map((proj) => (
        <View key={proj.title} style={styles.entry} wrap={true}>
          <Text style={styles.jobTitle}>{proj.title}</Text>
          <Text style={styles.description}>{proj.description}</Text>
        </View>
      ))}

      {/* Education - UNWRAPPED */}
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

      {/* Languages Section - Kept wrapped as it's small */}
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
