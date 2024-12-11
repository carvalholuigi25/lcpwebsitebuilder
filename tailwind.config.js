/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    '*.{html,js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
