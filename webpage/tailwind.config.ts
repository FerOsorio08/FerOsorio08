import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,ts,html}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "hsl(var(--teal))",
          foreground: "hsl(var(--teal-foreground))",
          highlight: "hsl(var(--teal-highlight))",
          dark: "hsl(var(--teal-dark))",
          background : "hsl(var(--teal-background))",
          FU: "hsl(var(--teal-FU))",
        },
    },
  },
  plugins: [],
},
}satisfies Config;

export default config;
