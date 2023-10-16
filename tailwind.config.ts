/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kode-crumbs-black": "#191E25",
        "kode-crumbs-orange": "#FFBD59",
        "link-dark-mode": "#59C3FF",
        "link-light-mode": "#00F",
      },
      fontFamily: {
        Billy: ["var(--font-billy)"],
        UnicaOne: ["var(--font-unica-one)"],
        FiraSans: ["var(--font-fira-sans)"],
      },
      backgroundImage: {
        heroDark: "url('/static/svg/heroDark.svg')",
        hero: "url('/static/svg/hero.svg')",
      },
    },
  },
  plugins: [],
};
