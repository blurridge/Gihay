import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gihay-bg": "#F9CECD",
        "gihay-text": "#55192D",
        "gihay-highlight": "#F63E7B",
        "gihay-dark-pink": "#940D3E",
        "gihay-heading": "#F63E7B",
        customBorder: "rgba(255, 255, 255, 0.125)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        glacial: ["GlacialIndifference", "sans-serif"],
        bright: ["Bright", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      borderRadius: {
        xl: "12px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
