/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(3 7 18)",
        "primary-disabled": "rgb(17 24 39)",
        "primary-hover": "rgb(17 24 39)",
        secondary: "rgb(249 250 251)",
        "secondary-disabled": "rgb(209 213 219)",
        "secondary-hover": "rgb(209 213 219)",
      },
      colors: {
        primary: "rgb(3 7 18)",
        "primary-disabled": "rgb(17 24 39)",
        "primary-hover": "rgb(17 24 39)",
        secondary: "rgb(249 250 251)",
        "secondary-disabled": "rgb(209 213 219)",
        "secondary-hover": "rgb(209 213 219)",
      },
      borderColor: {
        primary: "rgb(3 7 18)",
        "primary-disabled": "rgb(17 24 39)",
        "primary-hover": "rgb(17 24 39)",
        secondary: "rgb(249 250 251)",
        "secondary-disabled": "rgb(209 213 219)",
        "secondary-hover": "rgb(209 213 219)",
      },
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
