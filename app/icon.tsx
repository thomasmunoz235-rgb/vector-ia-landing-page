import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0c1a30",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#4a7fd4",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            fontFamily: "serif",
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
