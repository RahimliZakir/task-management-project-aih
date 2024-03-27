/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zircon: "#fdfeff",
        "shuttle-gray": "#5B656F",
        "river-bed": "#495867",
        selago: { normal: "#EFF4FC", 70: "#EFF4FCB2" },
        "royal-blue": "#456CD9",
        "link-water": "#E3E9F9",
        "silver-tree": "#6EB484",
        harp: "#E9F4ED",
        "wild-blue-yonder": "#7886AC",
        "athens-gray": "#EBEDF3",
        "alizarin-crimson": {
          normal: "#DF2727",
          10: "#DF27271A",
        },
        "la-palma": {
          normal: "#109D1E",
          10: "#109D1E1A",
        },
        "tulip-tree": "#EFBB36",
        "old-lace": "#FDF8EB",
        "slate-gray": "#64748B",
        "periwinkle-blue": "#839BE5",
        downy: "#6ACEBC",
        "light-burgundy": "#A03E5F",
        "link-water": "#F6F8FD",
        ghost: "#C4C5D1",
        "gull-gray": "#94A3B8",
      },
      boxShadow: {
        default: "0px 3px 10px 1px #C7D1DC5C, 0px 1px 3px 0px #C7D1DC40",
      },
    },
  },
  plugins: [],
};
