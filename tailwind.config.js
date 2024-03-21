/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        text: ["var(--font-kode-mono)"],
      },
      borderWidth: {
        3: "3px",
      },
      keyframes: {
        roll: {
          "0%": { "border-left-width": "4px", "border-bottom-width": "0px" },
          "33%": { "border-top-width": "4px", "border-left-width": "0px" },
          "66%": { "border-right-width": "4px", "border-top-width": "0px" },
          "100%": { "border-bottom-width": "4px", "border-right-width": "0px" },
        },
        counterClock: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
        right: {
          "0%": { transform: "translate(0rem)" },
          "100%": { transform: "translate(.5rem)" },
        },
      },

      animation: {
        roll: "roll 0.5s ease-in-out infinite",
        drop: "counterClock 0.3s ease-in-out forwards",
        back: "counterClock 0.3s ease-in-out backwards",
        horBounceFor: "right 0.1s ease-in-out forwards",
        horBounceBack: "right 0.3s ease-in-out backwards",
      },
    },
  },

  plugins: [],
};
