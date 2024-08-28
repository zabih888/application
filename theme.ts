"use client";

import { generateColors } from "@mantine/colors-generator";
import { createTheme, virtualColor } from "@mantine/core";

const handler = () => {
  const colors = ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"];
  const cloneColors = [...colors];
  return {
    light: colors,
    dark: cloneColors.reverse(),
  };
};
const { dark, light } = handler();

export const theme = createTheme({
  fontFamily: "IRANSansWebFaNum",
  headings: {
    fontFamily: "IRANSansWebFaNumBold",
  },
  primaryColor: "primary",
  colors: {
    primary: generateColors("#5474B4"),
    secondary: generateColors("#87888c"),
    success: generateColors("#2BDD66"),
    error: generateColors("#F0185C"),
    // @ts-ignore
    bgLight: light,
    // @ts-ignore
    bgDark: dark,
    bg: virtualColor({
      name: "bg",
      dark: "bgDark",
      light: "bgLight",
    }),
  },
});
