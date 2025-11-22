import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Play Karan's Jackpot Game";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #1e1b4b, #0f172a)", // Deep Indigo to Dark Slate
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Golden Glow Effect Background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "rgba(251, 191, 36, 0.15)", // Amber color
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#94A3B8",
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: "4px",
            zIndex: 10,
          }}
        >
          React Personal Project
        </div>

        {/* Main Title with Glow */}
        <div
          style={{
            fontSize: 86,
            fontWeight: 900,
            color: "#FCD34D", // Amber-300
            textShadow: "0 0 40px rgba(252, 211, 77, 0.4)",
            marginBottom: 50,
            zIndex: 10,
            textAlign: "center",
          }}
        >
          {"🎰 Karan's Jackpot"}
        </div>

        {/* Visual Slots */}
        <div style={{ display: "flex", gap: "30px", zIndex: 10 }}>
          {/* Slot 1 */}
          <div
            style={{
              width: 130,
              height: 130,
              background: "#1F2937",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "4px solid #374151",
            }}
          >
            🍒
          </div>

          {/* Slot 2 (Winner!) */}
          <div
            style={{
              width: 130,
              height: 130,
              background: "#312E81", // Indigo background
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "6px solid #FCD34D", // Gold Border
              boxShadow: "0 0 30px rgba(252, 211, 77, 0.5)",
            }}
          >
            ⭐
          </div>

          {/* Slot 3 */}
          <div
            style={{
              width: 130,
              height: 130,
              background: "#1F2937",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "4px solid #374151",
            }}
          >
            🍋
          </div>
        </div>

        {/* Call to Action */}
        <div
          style={{
            marginTop: 60,
            padding: "12px 40px",
            background: "#2563EB",
            color: "white",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 600,
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
          }}
        >
          Play Now
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
