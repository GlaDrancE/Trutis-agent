/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(201.28deg, #EAEEFE 45.21%, #183EC2 97.31%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
};