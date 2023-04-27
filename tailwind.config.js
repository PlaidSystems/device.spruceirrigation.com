// See https://next.tailwindcss.com/docs/configuration for details

//change these
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    fontFamily: {
      sans: ["Open Sans", "Gilroy", "sans-serif"],
      display: ["Open Sans", "Gilroy", "sans-serif"],
      body: ["Open Sans", "Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    inset: {
      "0": "0%",
      "1/10": "10%",
      "1/5": "20%",
      "1/3": "33%",
      "1/2": "50%",
    },
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "Montserrat",
          "Roboto",
          "Open Sans",
          "Gilroy",
          "sans-serif",
        ],
      },
      colors: {
        cyan: "#9cdbff",
        logocolor: "#c100ff",
        tan: {
          "100": "#f9f7f0",
          "200": "#f8f6f0",
          "300": "#f3edde",
          "400": "#eae2cc",
        },
        berry: {
          lighter: "#d45fa3",
          default: "#d8228c",
          dark: "#bd1476",
        },
        mint: {
          lighter: "#d5f5e0",
          default: "#9ae6b4",
          dark: "#80e2a1",
        },
        accent: {
          teal: "#32dcc5",
          green: "#27df86",
          blue: "#23b8f5",
        },
        accent1: {
          lighter: "#d45fa3",
          default: "#d8228c",
          dark: "#bd1476",
        },
        accent2: {
          lighter: "#8fddff",
          default: "#70d1fd",
          dark: "#20bafd",
        },
      },
      spacing: {
        "80": "20rem",
        "96": "24rem",
        "128": "32rem",
        "160": "40rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        spinReverse: "spin 10s linear infinite reverse",
        "spin-medium": "spin 7s linear infinite",
        "spin-fast": "spin 4s linear infinite",
        "sparkle-slow": "sparkle 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "sparkle-medium": "sparkle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "sparkle-fast": "sparkle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wiggle: "fadeIn 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        "fadeIn-slow": "fadeIn 1s ease-in forwards",
        "ping-slow": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        slideIn: "slideIn 1s cubic-bezier(0, 0, 0.2, 1) forwards",
        slideUp: "slideUp 1s cubic-bezier(0, 0, 0.5, 1)",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { opacity: 1 },
          "10%": { opacity: 0.1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spinReverse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0%)" },
        },
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "focus", "focus-within"],
  },
  plugins: [],
};
