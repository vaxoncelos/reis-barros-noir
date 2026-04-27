export type RGB = { r: number; g: number; b: number };

export const clamp8 = (v: number) => Math.max(0, Math.min(255, Math.round(v)));

export const rgbToHex = (r: number, g: number, b: number) =>
  "#" + [r, g, b].map((v) => clamp8(v).toString(16).padStart(2, "0")).join("").toUpperCase();

export const hexToRgb = (hex: string): RGB => {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
};

export const luma = (r: number, g: number, b: number) =>
  0.299 * r + 0.587 * g + 0.114 * b;

export const isLight = (r: number, g: number, b: number) => luma(r, g, b) > 160;

export const contrastText = (r: number, g: number, b: number) =>
  isLight(r, g, b) ? "#0E0E0E" : "#E8E5DC";

export const mutedOnAccent = (r: number, g: number, b: number, alpha = 0.55) =>
  isLight(r, g, b) ? `rgba(14,14,14,${alpha})` : `rgba(232,229,220,${alpha})`;
