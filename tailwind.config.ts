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
      },
      width: {
        board: "268px",
        boardSM: "344px",
        boardXL: "408px"
      },
      height: {
        board: "268px",
        boardSM: "344px",
        boardXL: "408px"
      }
    },
  },
  plugins: [],
} satisfies Config;
