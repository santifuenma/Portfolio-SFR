import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#171614",
          color: "#fbfbfa",
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 22,
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
