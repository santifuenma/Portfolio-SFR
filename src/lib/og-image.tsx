import { ImageResponse } from "next/og";

export const alt = "Santiago Fuenmayor Ruiz — Desarrollador de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#fbfbfa",
          color: "#171614",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6f6b64",
          }}
        >
          Valencia, España
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontStyle: "italic",
              fontSize: 88,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Santiago Fuenmayor Ruiz
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#6f6b64",
            }}
          >
            Desarrollador de Software
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["#1f6c9f", "#9f2f2d", "#956400", "#346538"].map((color) => (
            <div
              key={color}
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
