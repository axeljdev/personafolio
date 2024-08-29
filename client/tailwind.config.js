/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Urbanist"', 'sans-serif'], 
        title: ['"Expose"', 'sans-serif'],
      },
      colors: {
        "primary-color": "#EE6258",
        "secondary-color": "#242F40",
        "background-color": "#1B2129"
      },
    },
  },
  plugins: [
    import('tailwindcss-animated')
  ],
};