import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14b8a6",
          dark: "#0f766e",
        },
      },
    },
  },

  plugins: [],
};

export default config;
