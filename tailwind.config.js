/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "prim":"hsl(172, 67%, 45%)",
        "sec":"hsl(186, 14%, 43%)",
        "tri":"hsl(184, 14%, 56%)",
        "qu":"hsl(185, 41%, 84%)",
        "qui":"hsl(189, 41%, 97%)",
        "six":"hsl(0, 0%, 100%)",
        "sev":"#00474A"
      }
    },
  },
  plugins: [],
}

