/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0f0f0f',
          secondary: '#171717',
          tertiary: '#1e1e1e',
          elevated: '#262626',
          light: '#faf9f6',
          'light-alt': '#f2f0eb',
        },
        text: {
          primary: '#faf9f6',
          secondary: '#a3a3a3',
          tertiary: '#737373',
          inverse: '#0f0f0f',
        },
        accent: {
          DEFAULT: '#d4622b',
          light: '#e8813f',
          subtle: 'rgba(212, 98, 43, 0.12)',
        },
        border: {
          DEFAULT: '#2a2a2a',
          light: '#e5e2dc',
        },
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
