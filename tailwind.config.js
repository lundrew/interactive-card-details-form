/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"'],
      },
      colors: {
        activeColor1: "hsl(249, 99%, 64%)",
        activeColor2: "hsl(278, 94%, 30%)",
        lightViolet: "hsl(270, 3%, 87%)",
        darkViolet: "hsl(279, 6%, 55%)",
        darkerViolet: "hsl(278, 68%, 11%)",
        red: "hsl(0, 100%, 66%)",
      },
      fontSize: {
        sm: "0.65rem",
        smm: "20px",
        base: "14px",
        xl: "1.25rem",
      },
      width: {
        24: "75px",
        26: "78px",
        34: "122px",
        38: "148px",
        42: "168px",
        76: "300px",
      },
      spacing: {
        15: "60px",
        17: "72px",
        18: "74px",
        35: "140px",
        38: "152px",
        55: "222px",
        58: "232px",
        100: "400px",
      },
      placeholderOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  plugins: [],
};
