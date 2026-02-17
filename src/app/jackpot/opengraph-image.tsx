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
          background: "linear-gradient(to bottom, #0B1B3B, #14284D)",
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
            background: "rgba(229, 231, 235, 0.18)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#E5E7EB",
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
            color: "#FFFFFF",
            textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
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
              background: "#E5E7EB",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "4px solid #0B1B3B",
            }}
          >
            🍒
          </div>

          {/* Slot 2 (Winner!) */}
          <div
            style={{
              width: 130,
              height: 130,
              background: "#FFFFFF",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "6px solid #0B1B3B",
              boxShadow: "0 0 30px rgba(11, 27, 59, 0.5)",
            }}
          >
            ⭐
          </div>

          {/* Slot 3 */}
          <div
            style={{
              width: 130,
              height: 130,
              background: "#E5E7EB",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 70,
              border: "4px solid #0B1B3B",
            }}
          >
            🍋
          </div>
        </div>

        {/* Call to Action */}
        <div
          style={{
            padding: "14px 32px",
            background: "#0B1B3B",
            color: "#FFFFFF",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 600,
            boxShadow: "0 10px 25px -5px rgba(11, 27, 59, 0.5)",
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
