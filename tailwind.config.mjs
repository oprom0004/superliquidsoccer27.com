/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'abyss': {
          bg: '#020611',
          darkest: '#01040a',
          dark: '#051224',
          card: '#091c34',
          border: 'rgba(0, 242, 254, 0.22)',
          hover: '#0d284a',
          cyan: '#00f2fe',
        },
        'sonar': {
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          yellow: '#f59e0b',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'sonar-glow': '0 0 30px rgba(6, 182, 212, 0.25)',
        'hud-glow': '0 0 45px rgba(0, 242, 254, 0.35)',
      },
    },
  },
  plugins: [],
};
