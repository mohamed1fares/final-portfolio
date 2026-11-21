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
          primary: '#F8FAFC',
          secondary: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        text: {
          primary: '#172B4D',
          secondary: '#64748B',
          tertiary: '#94A3B8',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          subtle: 'rgba(37, 99, 235, 0.08)',
          muted: 'rgba(37, 99, 235, 0.15)',
        },
        border: {
          DEFAULT: '#E2E8F0',
          strong: '#CBD5E1',
        },
        success: '#10B981',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'section': '0 2px 8px rgba(0,0,0,0.06)',
        'accent': '0 4px 24px rgba(37, 99, 235, 0.18)',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
