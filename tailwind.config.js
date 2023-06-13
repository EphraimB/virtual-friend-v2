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
      borderWidth: {
        '1vmin': '1vmin',
      },
      borderRadius: {
        'face': '0 20% 50% 70% / 50%',
      },
      boxShadow: {
        'face-effect': '-0.125vmin 0.25vmin, inset -1.5vmin 0.5vmin var(--skin-light), inset 3vmin 0.5vmin var(--skin-dark)'
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
