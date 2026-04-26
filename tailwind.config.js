/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        stone: '#C4B49A',
        dark: '#1A1A18',
        muted: '#8A8578',
        accent: '#8B6F47',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}
