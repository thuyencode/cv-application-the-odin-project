import * as defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        ram: 'repeat(auto-fit, minmax(768px, 1fr))'
      },
      screens: {
        xs: '475px'
      }
    }
  },
  plugins: []
}
