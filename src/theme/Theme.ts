import { createStitches } from "@stitches/react";

export const { styled, theme, createTheme } = createStitches({
  theme: {
    colors: {
      white: "#fff",

      indigo200: "#c7d2fe",
      indigo300: "#a5b4fc",
      indigo400: "#818cf8",
      indigo500: "#6366f1",
      indigo600: "#4f46e5",
      indigo700: "#4338ca",
      indigo900: "#312e81",
      indigo100_tp: "#4338ca19",
      indigo200_tp: "#4338ca32",

      zinc100: "#f4f4f5",
      zinc200: "#e4e4e7",
      zinc300: "#d4d4d8",
      zinc400: "#a1a1aa",
      zinc500: "#71717A",
      zinc600: "#52525B",
      zinc700: "#3F3F46",
      zinc800: "#27272A",
      zinc900: "#18181B",
      zinc100_tp: "#71717A19",
      zinc200_tp: "#71717A32",

      light500: "#f2f2f2",
      light700: "#e9ecef",
      light900: "#dde1e3",

      primary_bg: "$indigo500",
      primary_bg_text: "$white",
      primary_bg_tonal: "$indigo200",
      primary_bg_tonal_text: "$indigo900",
      primary_text: "$indigo700",
      primary_border: "$indigo500",

      gray_bg: "$zinc500",
      gray_bg_text: "$white",
      gray_bg_tonal: "$zinc200",
      gray_bg_tonal_text: "$zinc900",
      gray_text: "$zinc700",
      gray_border: "$zinc500",

      disabled_bg: "$light700",
      disabled_text: "$zinc400",
    },
    shadows: {
      base: "0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1)",
    },
  },
});
