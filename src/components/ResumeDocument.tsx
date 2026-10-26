import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { Profile } from "@/lib/data";
import { SITE_HOST, SITE_URL } from "@/lib/site";

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
  updated: {
    marginTop: 16,
    fontSize: 9,
    color: "#777",
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
    fontSize: 11,
    color: "#000",
    marginBottom: 6,
  },
  contactInfo: {
    fontSize: 9,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
  },
  contactLine: {
    fontSize: 9,
    marginTop: 2,
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
    marginBottom: 12,
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
    marginBottom: 10,
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
    marginBottom: 6,
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

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function formatResumeDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const ResumeDocument = ({ profile }: { profile: Profile }) => {
  const { personalInfo, skills, experiences, education, languages } = profile;
  const linkedInUrl = displayUrl(personalInfo.linkedin);
  const githubUrl = displayUrl(personalInfo.github);

  return (
    <Document
      title={`${personalInfo.name} — Resume`}
      author={personalInfo.name}
      subject={personalInfo.headline}
      creator={personalInfo.name}
      keywords="iOS, Swift, Front-End, TypeScript, Next.js, Fintech, Payments"
    >
      <Page style={styles.page} wrap>
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
          </View>
          <Text style={styles.contactLine}>{personalInfo.location}</Text>
          <View style={styles.contactInfo}>
            <Link style={styles.link} src={personalInfo.linkedin}>
              {linkedInUrl}
            </Link>
            <Text style={styles.separator}>|</Text>
            <Link style={styles.link} src={personalInfo.github}>
              {githubUrl}
            </Link>
            <Text style={styles.separator}>|</Text>
            <Link style={styles.link} src={SITE_URL}>
              {SITE_HOST}
            </Link>
          </View>
        </View>

        <View style={styles.section} wrap={false} minPresenceAhead={48}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.description}>{personalInfo.summary}</Text>
        </View>

        <View style={styles.section} wrap={false} minPresenceAhead={48}>
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

        <View minPresenceAhead={64}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
        </View>
        {experiences.map((exp) => (
          <View
            key={exp.company}
            style={styles.entry}
            wrap={false}
            minPresenceAhead={56}
          >
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

        <View minPresenceAhead={48}>
          <Text style={styles.sectionTitle}>Education</Text>
        </View>
        {education.map((edu) => (
          <View key={edu.degree} style={styles.entry} wrap={false}>
            <View style={styles.company}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.dates}>{edu.dates}</Text>
            </View>
            <Text>{edu.university}</Text>
          </View>
        ))}

        <View style={styles.section} wrap={false} minPresenceAhead={48}>
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
                <Text style={{ fontSize: 9, color: "#777" }}>
                  {lang.detail}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.updated}>
          Last updated {formatResumeDate(profile.resumeUpdated)}
        </Text>
      </Page>
    </Document>
  );
};

export default ResumeDocument;
