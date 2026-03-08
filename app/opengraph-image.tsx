import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Vector — Desarrollo Web & Inteligencia Artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const logoData = readFileSync(join(process.cwd(), "public/images/Vector-Ia-trasparente.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0c1a30",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(74,127,212,0.15) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-100px",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(30,58,110,0.8) 0%, transparent 70%)",
            transform: "translateY(-50%)",
            filter: "blur(40px)",
          }}
        />

        {/* Logo */}
        <img
          src={logoBase64}
          alt="Vector"
          style={{ height: 56, objectFit: "contain" }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
          {/* Tag line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 4,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#4a7fd4" }} />
            <span
              style={{
                color: "#4a7fd4",
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Desarrollo Web & IA · Buenos Aires
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            Construimos
          </div>
          <div
            style={{
              color: "rgba(30,58,110,0.5)",
              fontSize: 64,
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginTop: -8,
            }}
          >
            software
          </div>
          <div
            style={{
              color: "#4a7fd4",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              marginTop: -8,
            }}
          >
            inteligente.
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "rgba(147,181,232,0.6)",
              fontSize: 20,
              marginTop: 12,
              maxWidth: 560,
              lineHeight: 1.5,
            }}
          >
            Desarrollo web de producto e integraciones de IA para empresas que
            quieren resultados reales.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
