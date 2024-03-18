/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      default: "#495867",
      bagdePurple: "#456CD9",
    },
    backgroundColor: {
      body: "#fdfeff",
      purple: "#456cd9",
      white: "#ffffff",
      selectedTaskTableHead: "#EFF4FC",
      badgePurple: "#E3E9F9",
      priorityHigh: "#DF2727",
    },
    borderColor: {
      white: "#ffffff",
      badgePurple: "#456CD9",
    },
    boxShadow: {
      default: "0px 3px 10px 1px #C7D1DC5C, 0px 1px 3px 0px #C7D1DC40",
    },
    extend: {},
  },
  plugins: [],
};
