import ResumeView from "@/components/ResumeView";
import { profile } from "@/lib/data";

export default function Home() {
  return <ResumeView data={profile} />;
}
