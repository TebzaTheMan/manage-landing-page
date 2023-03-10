/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        //Primary
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 99%)",
        darkBlue: "hsl(228, 39%, 23%)",
        //Neutral
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%) ",
        veryPaleRed: "hsl(13, 100%, 96%) ",
        veryLightGray: "hsl(0, 0%, 98%)",
      }
    },
    backgroundImage: {
      "blob": "url(/images/blobs/bg-tablet-pattern.svg)",
      "desktop-blob": "url(/images/blobs/bg-simplify-section-desktop.svg)",
      "mobile-blob":"url(/images/blobs/bg-simplify-section-mobile.svg)",
    },
  },
  plugins: [],
}
