/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        audrey: {
          red: "#CD0F2D",
          black: "#000000",
          green: "#64B9AF",
          "text-black": "#1A1A1A",
          "off-white": "#FAF8F5",
          "muted-gray": "#8B8B8B",
        },
      },
      fontFamily: {
        yugo: ['"Yu Gothic Medium"', "YuGothic", "sans-serif"],
        futura: ['"Futura Std"', "Futura", "sans-serif"],
      },
      letterSpacing: {
        "audrey-sm": "0.05em",
        "audrey-md": "0.1em",
        "audrey-lg": "0.15em",
        "audrey-xl": "0.2em",
        "audrey-2xl": "0.3em",
        "audrey-3xl": "0.4em",
      },
    },
  },
  plugins: [],
};
