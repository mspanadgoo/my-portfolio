import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohammad Sadegh Panadgoo Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "linear-gradient(to bottom right, #111827, #000000)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative Circle */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            background: "rgba(96, 165, 250, 0.2)", // Blue-400 with opacity
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#fff",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Mohammad Sadegh Panadgoo
          </div>

          <div
            style={{
              fontSize: 36,
              color: "#60A5FA", // Tailwind Blue-400
              fontWeight: 600,
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Senior Software Engineer
          </div>

          {/* Chips / Tags */}
          <div style={{ display: "flex", marginTop: 40, gap: "20px" }}>
            <div
              style={{
                padding: "10px 25px",
                background: "#1F2937",
                color: "#E5E7EB",
                borderRadius: 50,
                fontSize: 24,
              }}
            >
              Full Stack
            </div>
            <div
              style={{
                padding: "10px 25px",
                background: "#1F2937",
                color: "#E5E7EB",
                borderRadius: 50,
                fontSize: 24,
              }}
            >
              iOS
            </div>
            <div
              style={{
                padding: "10px 25px",
                background: "#1F2937",
                color: "#E5E7EB",
                borderRadius: 50,
                fontSize: 24,
              }}
            >
              Microservices
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
