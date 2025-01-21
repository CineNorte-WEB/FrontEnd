/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        yeonsung: ["YeonSung", ...defaultTheme.fontFamily.sans],
        petemoss: ["Petemoss", ...defaultTheme.fontFamily.sans],
        nanum: ['"Nanum Gothic"', "sans-serif"],
      },
      width: {
        35: "5.3rem",
      },
    },
  },
  plugins: [],
};
