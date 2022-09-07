const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{html,hbs}'],
  darkMode: 'media',
  theme: {
    extend: {
      borderColor: (theme) => theme('colors.gray.lightest'),
      colors: {
        gray: {
          darkest: 'rgb(var(--color-gray-darkest) / <alpha-value>)',
          dark: 'rgb(var(--color-gray-dark) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
          light: 'rgb(var(--color-light) / <alpha-value>)',
          lightest: 'rgb(var(--color-lightest) / <alpha-value>)',
        },
        primary: {
          light: colors.pink['100'],
          DEFAULT: colors.pink['500'],
          dark: colors.pink['800'],
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
