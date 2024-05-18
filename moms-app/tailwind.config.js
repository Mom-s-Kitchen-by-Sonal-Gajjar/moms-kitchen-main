/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'burgendy': '#7C2222',
        'light_burgendy': '#AC9292',
        'grey': '#D9D9D9',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      spacing: {
        '18': '4.5rem', // Example for a custom height
      },
      fontSize: {
        sm: ['20px', '23px'],
        base: ['50px', '80px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },

  },
  plugins: [],
}