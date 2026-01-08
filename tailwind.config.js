/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'muses-orange': '#e98047',
        'muses-purple': '#A569BD',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
