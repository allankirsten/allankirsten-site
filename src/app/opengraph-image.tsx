import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Allan Kirsten — From chaos to done, by design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`)
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
  if (match) {
    const res = await fetch(match[1]);
    if (res.status === 200) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family}`);
}

export default async function Image() {
  const octopus = await readFile(join(process.cwd(), "public/images/octopus-og.jpg"));
  const octopusSrc = `data:image/jpeg;base64,${octopus.toString("base64")}`;
  const displayFont = await loadGoogleFont("DM+Serif+Display", 400);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D0D0D",
          position: "relative",
        }}
      >
        <img
          src={octopusSrc}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.16,
          }}
        />
        <p
          style={{
            position: "relative",
            fontSize: 28,
            color: "#9A9A9A",
            letterSpacing: 1,
            marginBottom: 4,
          }}
        >
          Allan Kirsten
        </p>
        <p
          style={{
            position: "relative",
            fontFamily: "DM Serif Display",
            fontSize: 68,
            color: "#F5F0E8",
            textAlign: "center",
            lineHeight: 1.2,
            margin: 0,
            padding: "0 90px",
          }}
        >
          From chaos to done, by design
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "DM Serif Display", data: displayFont, style: "normal", weight: 400 }],
    }
  );
}
