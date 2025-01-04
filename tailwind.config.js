/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  colors: {
    primary: "#EF4444",
    secondary: "#eeeeee",
    success: "#10B981",
    // Add more custom colors here
  },
  plugins: [],
};
