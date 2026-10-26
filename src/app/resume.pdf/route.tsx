import { renderToBuffer } from "@react-pdf/renderer";
import ResumeDocument from "@/components/ResumeDocument";
import { profile } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const buffer = await renderToBuffer(<ResumeDocument profile={profile} />);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="Mohammad-Sadegh-Panadgoo-Resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
