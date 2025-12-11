// get a consistent color from a string every time (intended for dark background)
export default function getColorFromString(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const safeHash = Math.abs(hash);

  // Hue from hash (all colors)
  const hue = safeHash % 360;

  // Lower saturation → softer pastel colors (better for text on dark bg)
  const saturation = 40 + (safeHash % 10); // 40–50%

  // Higher lightness → bright enough to pop on dark background
  const lightness = 75 + (safeHash % 5); // 75–80%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
