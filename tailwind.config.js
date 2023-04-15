/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.neutral', 'currentColor'),
    }),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    boxShadow: {
      DEFAULT: '0px 18px 24px rgba(0, 0, 0, 0.04)',
      modal: '0px 9px 18px rgba(0, 0, 0, 0.08)',
    },
    colors: {
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      accent: {
        DEFAULT: '#ff642f',
        contrast: colors.white,
      },
      secondary: '#ffd7c9',
      tertiary: '#e3f1ff',
      neutral: {
        light: '#f9f9f9',
        DEFAULT: '#e8e8e8',
        dark: '#7f7f7f',
      },
    },
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      primary: ['var(--font-inter)', 'sans-serif'],
      secondary: ['var(--font-playfair-display)', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
    extend: {},
  },
  plugins: [],
};
