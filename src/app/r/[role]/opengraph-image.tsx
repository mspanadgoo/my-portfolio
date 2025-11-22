import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Resume Profile";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { role: string } }) {
  const role = params.role;

  let title = "Software Engineer";

  if (role === "ios") title = "Senior iOS Engineer";
  if (role === "backend") title = "Senior Backend Engineer";
  if (role === "frontend") title = "Senior Frontend Engineer";
  if (role === "fullstack") title = "Senior Software Engineer";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A", // Dark slate background
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 100,
          fontFamily: "sans-serif",
        }}
      >
        {/* Side Accent Line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "20px",
            background: "#60A5FA",
          }}
        />

        <div
          style={{
            fontSize: 30,
            color: "#9CA3AF",
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Mohammad Sadegh Panadgoo
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {title}
        </div>

        <div style={{ marginTop: 40, display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 10,
              height: 10,
              background: "#22C55E",
              borderRadius: "50%",
              marginRight: 15,
            }}
          ></div>
          <div style={{ fontSize: 32, color: "#E5E7EB" }}>
            Open for Opportunities
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
