import ResumeView from "@/components/ResumeView";
import { getProfile } from "@/lib/data";

export async function generateMetadata({ params }) {
  const { role } = await params;
  const data = getProfile(role);

  if (!data) return {};

  return {
    title: `${data.personalInfo.name} - ${data.personalInfo.title}`,
    description: data.personalInfo.summary,
  };
}

export default async function SecretResumePage({ params }) {
  const { role } = await params;

  const data = getProfile(role);

  return <ResumeView data={data} />;
}
