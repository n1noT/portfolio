import { section } from "motion/react-client";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        accentLight: "var(--accent-light)",
        danger: "var(--danger)",
      },
      boxShadow: {
        card: "0 16px 32px rgba(0, 0, 0, 0.25)",
        rotation: "0 4px 8px -2px var(--accent), 0 -4px 4px -2px var(--primary), 4px 0 8px -2px var(--accent), -4px -0 4px -2px var(--primary)",
        gradient: "0 100px 40px 100px var(--danger), 0 -100px 40px 100px var(--accent), 100px 0 40px 100px var(--danger), -100px 0 40px 100px var(--accent)",
      },
      animation: {
        spinSlow: "spin 5s linear infinite",
        bounce: "bounce 2s ease-in 400",
      },
      maskImage: {
        "mask": "url('/pattern.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
