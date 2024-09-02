/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        auth: "url(/auth/auth-bg.jpg)",
        homeHeroSection: "url(/home/home-hero-section-bg.jpg)",
        homeAboutSection: "url(/home/home-about-section.jpg)",
      },
      screens: {
        xsm: "425px",
        xssm: "375px",
      },
    },
  },
  plugins: [],
};
