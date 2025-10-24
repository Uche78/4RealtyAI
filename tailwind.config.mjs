/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Your actual brand palette
        brand: {
          primary: '#F3F1EC',     // Primary/background - warm neutral
          accent: '#5C6173',      // Brand accent/CTA - sophisticated blue-gray
          text: '#4A4A4A',        // Text/strong contrast - rich dark brown
          secondary: '#487f6a',   // Secondary/subtle elements - dark green
          orange: '#ED785A',
          grey: '#4a4737',
          black: '#1a1918',
        },
        // Expanded palette for variations
        cream: {
          50: '#fdfcfb',
          100: '#f8f4f0',
          200: '#f0eee4',         // Your new primary
          300: '#E6DED9',         
          400: '#d6c9be',
          500: '#c4b3a3',
          600: '#b09c87',
          700: '#9a8068',
          800: '#7d6651',
          900: '#665340',
        },
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5C6173',         // Your accent
          800: '#3c4043',
          900: '#202124',
        },
        charcoal: {
          DEFAULT: '#2c2c2c',
          light: '#4a4a4a',
        },
        warm: {
          50: '#faf9f7',
          100: '#f0efec',
          200: '#e5e2dd',
          300: '#d5d0c8',
          400: '#c0b8ad',
          500: '#AEA7A2',         // Your secondary
          600: '#998f87',
          700: '#7d726a',
          800: '#635a54',
          900: '#4a423e',
        }
      },
      
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Bentham', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': '13px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '42px',
        '6xl': '48px',
        '7xl': '56px',
        '8xl': '64px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
