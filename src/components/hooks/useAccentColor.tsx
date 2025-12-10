import { useEffect, useState } from "react";
import { Vibrant } from "node-vibrant/browser";

export default function useAccentColor(imageUrl?: string) {
  const [accentColor, setAccentColor] = useState<string | null>(null);

  useEffect(() => {
    async function extractColor() {
      if (!imageUrl) return;

      try {
        const palette = await Vibrant.from(imageUrl).getPalette();

        const swatch =
          palette.Vibrant ||
          palette.LightVibrant ||
          palette.Muted ||
          palette.DarkVibrant ||
          palette.LightMuted ||
          palette.DarkMuted;

        if (swatch) {
          setAccentColor(swatch.hex);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error extracting colors", err);
      }
    }

    extractColor();
  }, [imageUrl]);

  return accentColor;
}
