"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { contrastText, isLight, mutedOnAccent, rgbToHex, type RGB } from "@/lib/color";

type ColorState = RGB & {
  hex: string;
  text: string;
  light: boolean;
  muted: string;
  setRGB: (rgb: Partial<RGB>) => void;
  setHex: (hex: string) => void;
};

const ColorContext = createContext<ColorState | null>(null);

export function useColor(): ColorState {
  const ctx = useContext(ColorContext);
  if (!ctx) throw new Error("useColor must be used inside <ColorProvider>");
  return ctx;
}

export function ColorProvider({
  children,
  initial = { r: 255, g: 178, b: 0 },
}: {
  children: ReactNode;
  initial?: RGB;
}) {
  const [rgb, setRgb] = useState<RGB>(initial);

  const setRGB = useCallback((next: Partial<RGB>) => {
    setRgb((cur) => ({ ...cur, ...next }));
  }, []);

  const setHex = useCallback((hex: string) => {
    const h = hex.replace("#", "");
    setRgb({
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    });
  }, []);

  const value = useMemo<ColorState>(() => {
    const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
    const text = contrastText(rgb.r, rgb.g, rgb.b);
    const light = isLight(rgb.r, rgb.g, rgb.b);
    const muted = mutedOnAccent(rgb.r, rgb.g, rgb.b);
    return { ...rgb, hex, text, light, muted, setRGB, setHex };
  }, [rgb, setRGB, setHex]);

  const style: CSSProperties & Record<string, string> = {
    "--accent": value.hex,
    "--accent-text": value.text,
    "--accent-muted": value.muted,
    "--accent-r": String(rgb.r),
    "--accent-g": String(rgb.g),
    "--accent-b": String(rgb.b),
  };

  return (
    <ColorContext.Provider value={value}>
      <div style={style} className="contents">
        {children}
      </div>
    </ColorContext.Provider>
  );
}
