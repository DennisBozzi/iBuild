/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1920px'
      }
    },
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
} satisfies Config;