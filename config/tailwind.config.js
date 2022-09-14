const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,html,hbs}'],
  darkMode: 'media',
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.base.5'),
      }),
      colors: {
        base: {
          1: 'rgb(var(--color-base-1) / <alpha-value>)',
          2: 'rgb(var(--color-base-2) / <alpha-value>)',
          3: 'rgb(var(--color-base-3) / <alpha-value>)',
          4: 'rgb(var(--color-base-4) / <alpha-value>)',
          5: 'rgb(var(--color-base-5) / <alpha-value>)',
          6: 'rgb(var(--color-base-6) / <alpha-value>)',
          7: 'rgb(var(--color-base-7) / <alpha-value>)',
        },
        primary: {
          light: colors.pink['100'],
          DEFAULT: colors.pink['500'],
          dark: colors.pink['800'],
        },
        success: {
          light: colors.green['100'],
          DEFAULT: colors.green['400'],
          dark: colors.green['800'],
        },
        danger: {
          light: colors.red['100'],
          DEFAULT: colors.red['500'],
          dark: colors.red['800'],
        },
        warning: {
          light: colors.yellow['100'],
          DEFAULT: colors.yellow['400'],
          dark: colors.yellow['700'],
        },
        info: {
          light: colors.blue['100'],
          DEFAULT: colors.blue['400'],
          dark: colors.blue['700'],
        },
      },
      zIndex: {
        'scroll-link': '10',
        'mobile-bar': '20',
        sidenav: '30',
        'modal-overlay': '40',
        modal: '50',
        dropdown: '60',
        'context-menu': '70',
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [],
  plugins: [],
};
