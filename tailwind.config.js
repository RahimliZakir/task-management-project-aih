/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      default: "#495867",
      badgeConfirm: "#456CD9",
      badgeDecision: "#6EB484",
      badgeComment: "#7886AC",
      urgencyTitle: "#64748B",
    },
    backgroundColor: {
      body: "#fdfeff",
      purple: "#456cd9",
      white: "#ffffff",
      selectedTaskTableHeadAndStripe: "#EFF4FC",
      badgeConfirm: "#E3E9F9",
      badgeDecision: "#E9F4ED",
      badgeComment: "#EBEDF3",
      priorityHighDark: "#DF2727",
      priorityMediumDark: "#EFBB36",
      priorityLowDark: "#109D1E",
      priorityHighLight: "#DF27271A",
      priorityMediumLight: "#FDF8EB",
      priorityLowLight: "#109D1E1A",
      urgencyInProgress: "#456CD8",
      urgencyNotStarted: "#839BE5",
      urgencyExecuted: "#6ACEBC",
      urgencyDelaying: "#A03E5F",
    },
    borderColor: {
      white: "#ffffff",
      badgeConfirm: "#456CD9",
      badgeDecision: "#6EB484",
      badgeComment: "#7886AC",
      priorityHigh: "#DF2727",
      priorityMedium: "#EFBB36",
      priorityLow: "#109D1E",
    },
    boxShadow: {
      default: "0px 3px 10px 1px #C7D1DC5C, 0px 1px 3px 0px #C7D1DC40",
    },
    extend: {},
  },
  plugins: [],
};
