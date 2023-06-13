/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '80vmin': '80vmin',
      },
      height: {
        '80vmin': '80vmin',
      },
    },
    colors: {
      line: '#222',
      skin: '#fca',
      'skin-dark': '#eb9',
      'skin-light': '#fdb',
      shirt: '#0f0'
    },
  },
  plugins: [],
}
