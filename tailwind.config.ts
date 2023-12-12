import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--font-roboto)", "sans-serif"],
      lato: ["var(--font-lato)", "sans"],
    },
    extend: {
      colors: {
        charcoal: "#333333",
        neon: "#00FFFF",
      },
    },
  },
  plugins: [],
};
export default config;
