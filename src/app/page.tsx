import ResumeView from "@/components/ResumeView";
import { getProfile } from "@/lib/data";

export async function generateMetadata() {
  return {
    title: "Mohammad Sadegh Panadgoo - Senior Software Engineer",
    description:
      "Personal portfolio of Mohammad Sadegh Panadgoo. Expert in Full Stack Development, iOS, and Fintech architectures.",
    openGraph: {
      title: "Mohammad Sadegh Panadgoo - Portfolio",
      description: "View my projects, skills, and download my resume.",
      url: "https://mspanadgoo.ir",
      siteName: "Mohammad Sadegh Panadgoo",
      locale: "en_US",
      type: "website",
    },
  };
}

export default function Home() {
  const defaultRole = process.env.NEXT_PUBLIC_DEFAULT_ROLE || "fullstack";
  const data = getProfile(defaultRole);

  return <ResumeView data={data} />;
}
