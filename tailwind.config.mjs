/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Your actual brand palette
        brand: {
          primary: '#f3f1ec',     // Primary/background - warm neutral
          accent: '#5C6173',      // Brand accent/CTA - sophisticated blue-gray
          text: '#262626',        // Text/strong contrast - rich dark brown
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
          50: '#f7f7f6',
          100: '#e3e3e1',
          200: '#c6c6c2',
          300: '#a8a8a3',
          400: '#8b8b84',
          500: '#6e6e65',
          600: '#515146',
          700: '#343427',
          800: '#2C2926',         // Your text color
          900: '#1a1918',
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
        // Luxury headlines and product names
        display: ['serif', 'Playfair Display', 'Georgia' ],
        // Body text and interface
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Supporting sans-serif for buttons, labels, fine print
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
        // Alternative sans-serif option
        alt: ['Montserrat', 'system-ui', 'sans-serif'],
        h1: ['serif', 'Playfair Display', 'Georgia', 'serif'],
        h2: ['serif', 'Playfair Display', 'Georgia', 'serif'],
        h3: ['Playfair Display', 'Georgia', 'serif'],
        h4: ['Playfair Display', 'Georgia', 'serif'],
        h5: ['Playfair Display', 'Georgia', 'serif'],
        h6: ['Playfair Display', 'Georgia', 'serif'],
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