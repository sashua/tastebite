/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      classic: '4 / 3',
      photo: '3 / 2',
      video: '16 / 9',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.neutral.200', 'currentColor'),
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
    colors: {
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      accent: {
        DEFAULT: '#ff642f',
        50: '#FFEDE7',
        100: '#FFDED2',
        200: '#FFBFA9',
        300: '#FFA181',
        400: '#FF8258',
        500: '#FF642F',
        600: '#F63F00',
        700: '#BE3000',
        800: '#862200',
        900: '#4E1400',
        950: '#320D00',
      },
      secondary: {
        DEFAULT: '#0381FF',
        50: '#F7FBFF',
        100: '#E3F1FF',
        200: '#ABD5FF',
        300: '#73B9FF',
        400: '#3B9DFF',
        500: '#0381FF',
        600: '#0065C9',
        700: '#004991',
        800: '#002D59',
        900: '#001121',
        950: '#000305',
      },
      neutral: {
        DEFAULT: '#A8A8A8',
        50: '#FFFFFF',
        100: '#F9F9F9',
        200: '#E5E5E5',
        300: '#D1D1D1',
        400: '#BCBCBC',
        500: '#A8A8A8',
        600: '#939393',
        700: '#7F7F7F',
        800: '#636363',
        900: '#474747',
        950: '#393939',
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
      'xs': ['0.75rem', { lineHeight: '1.125rem' }],
      'sm': ['0.875rem', { lineHeight: '1.375rem' }],
      'base': ['1rem', { lineHeight: '1.625rem' }],
      'lg': ['1.125rem', { lineHeight: '1.875rem' }],
      'xl': ['1.25rem', { lineHeight: '2.125rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.375rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.625rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.875rem' }],
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
  plugins: [require('@headlessui/tailwindcss')],
};
