import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EE",
        ink: "#132018",
        pine: {
          50: "#EAF0EB",
          100: "#CFDDD1",
          300: "#7FA487",
          500: "#2F5D42",
          700: "#1B4332",
          900: "#0E2A1E",
        },
        gold: {
          200: "#EBDCA6",
          400: "#D2B24C",
          500: "#C9A227",
          700: "#93761A",
        },
        sage: "#E8EEE7",
        rule: "#D8D2C2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        ledger:
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, #D8D2C2 35px, #D8D2C2 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
