import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-mist": { backgroundColor: "#f0f2f0" },
        ".shadow-card": { boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
        ".btn-primary": {
          "@apply rounded-full bg-pine-500 px-6 py-3 font-semibold text-white transition hover:bg-pine-700 focus:outline-none focus:ring-2 focus:ring-pine-300": {},
        },
        ".btn-ghost": {
          "@apply rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200": {},
        },
        ".input": {
          "@apply w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-pine-500 focus:outline-none focus:ring-2 focus:ring-pine-100": {},
        },
        ".label": {
          "@apply mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500": {},
        },
      });
    }),
  ],
};
export default config;
