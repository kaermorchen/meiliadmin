const colors = require('tailwindcss/colors');

const light = '#FAFAFA';
// const gray = '#EEEDEF';
// const dark = '#55585D';
// const text = '#33373B';

// const  light = '#E5E7EB';
// const secondary = '#374151';
// const gray = '#e1dfe2';
const text = '#252526';
const dark = '#1E1E1E';
// const primary = '#2563EB';
// const primary = '#ff5caa';

module.exports = {
  content: ['./app/**/*.{html,hbs}'],
  darkMode: 'media',
  theme: {
    extend: {
      borderColor: (theme) => theme('colors.gray.light'),
      colors: {
        light,
        // gray,
        dark,
        text,
        primary: {
          light: colors.pink['100'],
          DEFAULT: colors.pink['500'],
          dark: colors.pink['800'],
        },
        // gray: {
        //   light: colors.gray['100'],
        //   DEFAULT: colors.gray['500'],
        //   dark: colors.gray['800'],
        // },
        gray: {
          light: '#e5eaef',
          DEFAULT: '#A1A6B0',
          dark: '#676d7c',
        },
        black: {
          DEFAULT: '#222228',
        },
        yellow: {
          light: colors.yellow['100'],
          DEFAULT: colors.yellow['400'],
          dark: colors.yellow['700'],
        },
        green: {
          light: colors.green['100'],
          DEFAULT: colors.green['400'],
          dark: colors.green['800'],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [],
  plugins: [],
};
