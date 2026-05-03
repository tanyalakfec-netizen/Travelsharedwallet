/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FFFAF0",
          100: "#FAF1DD",
          200: "#F0E3C0",
          300: "#E5D29B",
        },
        navy: {
          400: "#3A5F8C",
          500: "#1B3A5C",
          600: "#16304D",
          700: "#11243C",
          DEFAULT: "#1B3A5C",
        },
        coral: {
          300: "#F5A685",
          400: "#F08854",
          500: "#E8693C",
          600: "#D55427",
          DEFAULT: "#E8693C",
          soft: "#FBE3D5",
        },
        gold: {
          400: "#E8C25C",
          500: "#E0B73B",
          600: "#C99E2A",
        },
        sage: {
          500: "#9BAE7E",
          600: "#7E9263",
        },
        ink: "#2A2620",
        ink2: "#5A4F40",
      },
      fontFamily: {
        display: ["'DM Serif Display'", "'Fraunces'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        thai: ["'IBM Plex Sans Thai'", "sans-serif"],
      },
      boxShadow: {
        soft:  "0 1px 3px rgba(42,38,32,0.04), 0 6px 18px rgba(42,38,32,0.08)",
        card:  "0 2px 4px rgba(42,38,32,0.05), 0 12px 28px rgba(42,38,32,0.10)",
        hero:  "0 20px 60px -20px rgba(27,58,92,0.45)",
        coral: "0 12px 30px -10px rgba(232,105,60,0.55)",
        nav:   "0 -4px 30px rgba(42,38,32,0.10)",
        stamp: "1px 1px 0 rgba(42,38,32,0.12), 3px 3px 0 rgba(42,38,32,0.06)",
      },
      animation: {
        wave:  "wave 6s linear infinite",
        wave2: "wave2 9s linear infinite",
        slide: "slide 0.32s cubic-bezier(0.22,1,0.36,1)",
        float: "float 4s ease-in-out infinite",
        pop:   "pop 0.5s cubic-bezier(0.22,1,0.36,1)",
        sail:  "sail 8s ease-in-out infinite",
      },
      keyframes: {
        wave:  { "0%": { transform: "translateX(0)" },     "100%": { transform: "translateX(-50%)" } },
        wave2: { "0%": { transform: "translateX(-25%)" }, "100%": { transform: "translateX(-75%)" } },
        slide: { from: { transform: "translateY(100%)" }, to: { transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        pop:   { from: { transform: "scale(0.8)", opacity: 0 }, to: { transform: "scale(1)", opacity: 1 } },
        sail:  { "0%,100%": { transform: "translate(0,0) rotate(-1deg)" }, "50%": { transform: "translate(2px,-3px) rotate(1deg)" } },
      },
    }
  },
  plugins: []
};
