/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',     // Extra small size
        'sm': '.875rem',    // Small size
        'base': '1rem',     // Base size
        'lg': '1.125rem',   // Large size
        'xl': '1.25rem',    // Extra large size
        '2xl': '1.5rem',    // 2 times extra large size
        // Add more custom sizes as needed
      }
    },
  },
  plugins: [],
}

