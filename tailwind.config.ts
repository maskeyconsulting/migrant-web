import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", "sans-serif"],
      serif: ["var(--font-montserrat)", "sans-serif"],
      mono: ["var(--font-montserrat)", "sans-serif"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            maxWidth: "65ch",
            h1: {
              color: "#1a202c",
              fontWeight: "800",
              fontSize: "2.25em",
            },
            h2: {
              color: "#2d3748",
              fontWeight: "700",
              fontSize: "1.8em",
            },
            h3: {
              color: "#4a5568",
              fontWeight: "600",
              fontSize: "1.5em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            a: {
              color: "#3182ce",
              textDecoration: "none",
              "&:hover": {
                color: "#2c5282",
                textDecoration: "underline",
              },
            },
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              lineHeight: "1.8",
            },
            ul: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], // Body text
        heading: ["var(--font-montserrat)", "sans-serif"], // Headings
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
