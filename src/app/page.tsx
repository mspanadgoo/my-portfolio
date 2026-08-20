import ResumeView from "@/components/ResumeView";
import { profile } from "@/lib/data";

export async function generateMetadata() {
  return {
    title: "Mohammad Sadegh Panadgoo - Lead Software Engineer",
    description: profile.personalInfo.summary,
    openGraph: {
      title: "Mohammad Sadegh Panadgoo - Lead Software Engineer",
      description: profile.personalInfo.summary,
      url: "https://mspanadgoo.ir",
      siteName: "Mohammad Sadegh Panadgoo",
      locale: "en_US",
      type: "profile",
    },
  };
}

export default function Home() {
  return <ResumeView data={profile} />;
}
