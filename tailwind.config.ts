import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sidebar: '#1E293B',
        background: '#E5E7EB',
        topbar: '#FFFFFF',
        primary: {
          50: '#EFF3FF',
          100: '#DAE2FF',
          200: '#BECDFF',
          300: '#91AEFF',
          400: '#5E84FC',
          500: '#3758F9',
          600: '#2237EE',
          700: '#1A25DB',
          800: '#1C20B1',
          900: '#1C228C',
          950: '#161755',
        },
        secondary: {
          50: '#ECFDF6',
          100: '#D1FAE8',
          200: '#A8F2D6',
          300: '#6FE6C1',
          400: '#36D1A5',
          500: '#13C296',
          600: '#079473',
          700: '#05775F',
          800: '#075E4D',
          900: '#074D41',
          950: '#022C25',
        },
        dark: {
          100: '#F6F7F8',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2A37',
          900: '#111928',
        },
        yellow: {
          100: '#FFFBEB',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FCD34D',
          500: '#FBBF24',
          600: '#F59E0B',
          700: '#D97706',
          800: '#B46509',
          900: '#92550E',
        },
        red: {
          100: '#FEF3F3',
          200: '#FEEBEB',
          300: '#FDD8D8',
          400: '#FBC0C0',
          500: '#F89090',
          600: '#F56060',
          700: '#F23030',
          800: '#E10E0E',
          900: '#CA0B0B',
        },
        green: {
          100: '#DAF8E6',
          200: '#C2F3D6',
          300: '#ACEFC8',
          400: '#82E6AC',
          500: '#57DE8F',
          600: '#2CD673',
          700: '#22AD5C',
          800: '#1A8245',
          900: '#196238',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#C0C9D0',
          700: '#A2ADB8',
          800: '#8B97A6',
          900: '#7A8596',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
