/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          bg: '#FDFBF7',
          card: '#FFFFFF',
          primary: '#365C42',
          secondary: '#A67C52',
          text: '#1F2937',
          muted: '#6B7280',
          border: 'rgba(0,0,0,0.08)',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
