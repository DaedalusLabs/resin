/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./node_modules/flowbite/**/*.{js,ts}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "hex-dark":
               "url('~/assets/images/backgrounds/BG_Hexagon_Dark10.webp')",
            "hex-white":
               "url('~/assets/images/backgrounds/BG_Hexagon_White10.webp')",
            "hex-resin":
               "url('~/assets/images/backgrounds/BG_Hexagon_RESIN.webp')",
         },
         animation: {
            spring: "spring 1200ms cubic-bezier(0.7, -0.4, 0.4, 1.4) forwards",
            dissolve: "dissolve 300ms ease-in-out 1.5s forwards",
         },
         keyframes: {
            spring: {
               "0%": { transform: "scale(0.5)", opacity: 0 },
               "50%": { transform: "scale(1.2)", opacity: 1 },
               "100%": { transform: "scale(1)", opacity: 1 },
            },
            dissolve: {
               "0%": { opacity: 0 },
               "100%": { opacity: 1 },
            },
         },
         colors: {
            resin: {
               50: "#FEF8EE",
               100: "#FDEFD7",
               200: "#FBDCAD",
               300: "#F8C279",
               400: "#F49E43",
               500: "#F07E19",
               600: "#E26714",
               700: "#BB4E13",
               800: "#953F17",
               900: "#783516",
            },
            pirate: {
               50: "#F5F5F6",
               100: "#E6E6E7",
               200: "#D0D0D1",
               300: "#AFB0B1",
               400: "#878889",
               500: "#6C6D6E",
               600: "#5C5D5E",
               700: "#4E4E50",
               800: "#444446",
               900: "#3C3C3D",
               950: "#303031",
            },
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
