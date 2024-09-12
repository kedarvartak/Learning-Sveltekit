/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'blue-800': '#1e3a8a',   // Custom dark blue
        'green-800': '#047857',  // Custom green
      },
      blur: {
        '120px': '120px',        // Custom blur value
      },
      animation: {
        marquee: 'marquee 20s linear infinite', // Adjust speed as needed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
