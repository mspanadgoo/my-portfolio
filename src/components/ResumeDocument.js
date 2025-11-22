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
    paddingTop: 35,
    paddingHorizontal: 45,
    paddingBottom: 65, // Reserves space for the footer
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#333",
    position: "relative",
  },
  // Footer positioned absolutely at the bottom
  footer: {
    position: "absolute",
    bottom: 20,
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
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
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "1px solid #ccc",
    paddingBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  entry: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 12,
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
    fontSize: 11,
    textAlign: "justify",
    color: "#444",
  },
  // === REVERTED SKILLS STYLING (Compact) ===
  skillsCategory: {
    marginBottom: 8,
  },
  skillsTitle: {
    fontWeight: "bold",
    fontSize: 11,
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 11,
    color: "#333",
    lineHeight: 1.4,
  },
  // Languages styling
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
      {/* Footer (Fixed) */}
      <Text
        style={styles.footer}
        fixed
        render={({ pageNumber, totalPages }) =>
          `Generated on ${generationDate || "Today"}  |  Page ${pageNumber} of ${totalPages}`
        }
      />

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

      {/* Technical Skills (Reverted to Compact Version) */}
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
        {projects.slice(0, 4).map((proj) => (
          <View key={proj.title} style={styles.entry}>
            <Text style={styles.jobTitle}>{proj.title}</Text>
            <Text style={styles.description}>{proj.description}</Text>
          </View>
        ))}
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

      {/* Languages Section */}
      <View style={styles.section}>
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
