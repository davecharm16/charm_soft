import { ImageResponse } from "next/og";

import { siteContent } from "@/content/site";

export const alt = `${siteContent.siteName} — ${siteContent.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0e27 0%, #141b3d 60%, #1e2749 100%)",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
          color: "#f8fafc",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.45) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -180,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 18,
              background: "linear-gradient(135deg, #6366f1, #f59e0b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            CS
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              display: "flex",
              gap: 10,
            }}
          >
            <span>CharmSoft</span>
            <span style={{ color: "#6366f1" }}>Solutions</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <span>Premium IT Solutions</span>
            <span style={{ color: "#6366f1" }}>for SMEs</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#94a3b8",
              maxWidth: 980,
            }}
          >
            AI · Automation · Cloud · Custom Software · Cybersecurity
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
