/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Add custom scrollbar colors or styles
      scrollbar: {
        width: 'thin', // Makes the scrollbar thin
      },
    },
  },
  plugins: [
    // Install the Tailwind Scrollbar plugin
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark'], // Enable dark mode variants if needed
  },
};
