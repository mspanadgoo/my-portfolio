"use client";

import ResumeView from "@/components/ResumeView";
import { getProfile } from "@/lib/data";

export default function Home() {
  const defaultRole = process.env.NEXT_PUBLIC_DEFAULT_ROLE || "fullstack";
  const data = getProfile(defaultRole);

  return <ResumeView data={data} />;
}
