/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        profile_animate: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        profile_animate: "profile_animate 8s ease-in-out infinite 1s",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      raleway: ["Raleway"],
      start: ['"Press Start 2P"'],
      kalam: ["Kalam"],
      yatra: ["Yatra One"],
    },
    shadeColors: {
      indigo: "#283593",
      blue_50: "#e3f2fd",
      blue_100: "#bbdefb",
      blue_200: "#90caf9",
      light_blue_500: "#03a9f4",
      light_blue_1000: "#01579b",
      light_blue_600: "#0288d1",
    },
  },
  plugins: [],
};
