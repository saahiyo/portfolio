import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
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
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.1), transparent 55%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          color: "#F9FAFB",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "#161616",
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            SA
          </div>
          <div style={{ fontSize: 24, color: "#9CA3AF" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 30,
              color: "#9CA3AF",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {siteConfig.role.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Building web platforms, APIs &amp; cloud-hosted apps.
          </div>
          <div style={{ fontSize: 26, color: "#6b7280", maxWidth: 820 }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
