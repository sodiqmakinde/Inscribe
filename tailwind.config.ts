import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "1204px": "1204px",
        "1024px": "1024px",
        "768px": "768px",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        grey: "var(--grey)",
        fadeWhite: "var(--fadeWhite)",
        borderColor: "var(--borderColor)",
      },
    },
  },
  plugins: [],
};
export default config;
