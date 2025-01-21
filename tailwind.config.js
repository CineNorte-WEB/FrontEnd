/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"], // Pacifico 폰트 추가
        yeonsung: ["YeonSung", ...defaultTheme.fontFamily.sans],
        petemoss: ["Petemoss", ...defaultTheme.fontFamily.sans],
      },
      width: {
        35: "70px",
      },
    },
  },
  plugins: [],
};
