/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b1a",
          900: "#0d1430",
          800: "#141d3f",
          700: "#1a2450",
        },
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(2,6,23,0.85), 0 12px 24px -18px rgba(34,211,238,0.16)",
        btn: "0 12px 24px -12px rgba(45,212,191,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
        nav: "0 20px 40px -20px rgba(2,6,23,0.8)",
      },
      backgroundImage: {
        "app-radial":
          "radial-gradient(1200px 600px at 85% -10%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(45,212,191,0.16), transparent 60%), linear-gradient(180deg, #0d1430, #070b1a 70%)",
      },
      animation: {
        "orb-float": "orb-float 18s cubic-bezier(0.22,1,0.36,1) infinite alternate",
        "page-in": "page-in 0.45s cubic-bezier(0.22,1,0.36,1)",
      },
      keyframes: {
        "orb-float": {
          from: { transform: "translateY(0) scale(1)" },
          to: { transform: "translateY(-40px) scale(1.12)" },
        },
        "page-in": {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
