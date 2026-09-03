/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Modo Claro 
        light: {
          primary: '#4F46E5',
          secondary: '#0F172A',
          tertiary: '#334155',
          neutral: '#64748B',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
        },
        // Paleta Modo Oscuro
        dark: {
          primary: '#6366F1',
          secondary: '#06B6D4',
          tertiary: '#10B981',
          neutral: '#08090A',
          bg: '#050505',
          surface: '#111315',
        }
      },
      fontFamily: {
        heading: ['Geist', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
