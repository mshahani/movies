import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'c-navy': '#141D33',
        'c-navy-medium': '#2E374C',
        'c-navy-semimedium': '#7A8399',
        'c-navy-light': '#424C66',
        'c-navy-lighter': '#505A73',
        'c-white': '#F7F8FA',
        'c-white-light': '#C3C4C7',
        'c-white-lighter': '#D1D3D7',
        'c-red': '#DA105E',
        'c-gray': '#343434',
        'c-gray-light': '#B8BDCC',
        'c-gray-thick':"#666666",
        'c-yellow': '#FFC945',
        'c-green': '#27E850',
        'c-blue': '#3694FF',
      },
      fontFamily: {
        morabba: ['var(--font-morabba)'], 
      },

    },
  },
  plugins: [],
};
export default config;
