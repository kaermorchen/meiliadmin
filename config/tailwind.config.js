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
  content: ['./app/**/*.html', './app/**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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

        gray: {
          light: colors.gray['100'],
          DEFAULT: colors.gray['500'],
          dark: colors.gray['800'],
        },
        green: {
          light: colors.emerald['100'],
          DEFAULT: colors.emerald['500'],
          dark: colors.emerald['800'],
        },
      },
    },
    // borderColor: gray,
    // emberPowerSelect: (theme) => ({
    //   default: {
    //     trigger: {
    //       borderRadius: theme('borderRadius.default'),
    //       borderColor: theme('colors.gray'),
    //       fontSize: theme('fontSize.base'),
    //       padding: `${theme('spacing.2')} ${theme('spacing.10')} ${theme(
    //         'spacing.2'
    //       )} ${theme('spacing.3')}`,
    //       minHeight: '42px',
    //       lineHeight: theme('lineHeight.normal'),
    //       maxWidth: theme('maxWidth.md'),
    //       zIndex: 0,
    //       '&:focus': {
    //         boxShadow: 'none',
    //         borderColor: theme('colors.primary'),
    //       },
    //     },
    //     dropdown: {
    //       // color: config.textColor,
    //       // backgroundColor: config.dropdownBackgroundColor,
    //       borderColor: theme('colors.gray'),
    //       // borderWidth: defaultTheme.borderWidth.default,
    //       // borderRadius: config.dropdownBorderRadius,
    //       boxShadow: theme('boxShadow.sm'),
    //       // '&.ember-basic-dropdown-content--in-place': {
    //       //   width: defaultTheme.width.full
    //       // },
    //       // '&.ember-basic-dropdown-content--above': {
    //       //   transform:
    //       //     config.dropdownMargin && config.dropdownMargin !== '0'
    //       //       ? `translateY(calc(-1 * ${config.dropdownMargin}))`
    //       //       : null,
    //       //   borderBottomLeftRadius: config.openedBorderRadius,
    //       //   borderBottomRightRadius: config.openedBorderRadius
    //       // },
    //       // '&.ember-basic-dropdown-content--below, &.ember-basic-dropdown-content--in-place': {
    //       //   transform:
    //       //     config.dropdownMargin && config.dropdownMargin !== '0'
    //       //       ? `translateY(${config.dropdownMargin})`
    //       //       : null,
    //       //   borderTopLeftRadius: config.openedBorderRadius,
    //       //   borderTopRightRadius: config.openedBorderRadius
    //       // }
    //     },
    //     options: {
    //       // listStyle: 'none',
    //       marginTop: theme('spacing.1'),
    //       marginBottom: theme('spacing.1'),
    //       // marginLeft: '0',
    //       // marginRight: '0',
    //       // padding: '0',
    //       // userSelect: 'none',
    //       // '&[role="listbox"]': {
    //       //   overflowY: 'auto',
    //       //   '-webkit-overflow-scrolling': 'touch',
    //       //   maxHeight: defaultTheme.spacing[48]
    //       // }
    //     },
    //     option: {
    //       paddingLeft: theme('spacing.4'),
    //       paddingRight: theme('spacing.4'),
    //       paddingTop: theme('spacing.2'),
    //       paddingBottom: theme('spacing.2'),
    //       // fontSize: theme('fontSize.sm'),
    //       lineHeight: theme('lineHeight.5'),
    //       // color: theme('colors.gray.dark'),
    //       // '&[aria-disabled="true"]': {
    //       //   color: config.disabledTextColor,
    //       //   cursor: 'not-allowed'
    //       // },
    //       // '&[aria-selected="true"]': {
    //       //   backgroundColor: theme('colors.primary'),
    //       //   color: theme('colors.gray-700'),
    //       // },
    //       '&[aria-current="true"]': {
    //         backgroundColor: theme('colors.gray.light'),
    //         color: null,
    //       },
    //     },
    //     placeholder: {
    //       // display: 'block',
    //       // overflowX: 'hidden',
    //       // whiteSpace: 'nowrap',
    //       // textOverflow: 'ellipsis',
    //       // color: config.placeholderTextColor,
    //       lineHeight: theme('lineHeight.normal'),
    //     },
    //     search: {
    //       paddingBottom: theme('spacing.2'),
    //     },
    //     searchInput: {
    //       borderRadius: theme('borderRadius.default'),
    //       borderColor: theme('colors.gray'),
    //       fontSize: theme('fontSize.base'),
    //       padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
    //       minHeight: '42px',
    //       lineHeight: theme('lineHeight.normal'),
    //       maxWidth: theme('maxWidth.md'),
    //       '&:focus': {
    //         boxShadow: 'none',
    //         borderColor: theme('colors.primary'),
    //       },
    //     },
    //     multipleOptions: {
    //       // display: 'flex',
    //       // flexWrap: 'wrap',
    //       // alignItems: 'center',
    //       // paddingRight: defaultTheme.spacing[6],
    //       // marginTop: `-${theme('spacing.1')}`, // Discount to make one line items not take more space
    //       // marginBottom: `-${theme('spacing.2')}` // Discount marginBottom from option
    //     },

    //     multipleOption: {
    //       // display: 'flex',
    //       // alignItems: 'center',
    //       backgroundColor: theme('colors.gray.dark'),
    //       // color: config.multipleOptionTextColor,
    //       // borderRadius: config.multipleOptionBorderRadius,
    //       // fontSize: defaultTheme.fontSize.sm,
    //       // lineHeight: defaultTheme.lineHeight.tight,
    //       // paddingTop: defaultTheme.spacing[1],
    //       // paddingRight: defaultTheme.spacing[2],
    //       // paddingBottom: defaultTheme.spacing[1],
    //       // paddingLeft: defaultTheme.spacing[1],
    //       // marginRight: defaultTheme.spacing[1],
    //       // marginBottom: 0,
    //       // '&:first-child': {
    //       //   marginLeft: 0
    //       // },
    //       // '&:last-child': {
    //       //   marginRight: 0
    //       // }
    //     },
    //     // multipleRemoveBtn: {
    //     //   lineHeight: defaultTheme.lineHeight.tight,
    //     //   display: 'inline-block',
    //     //   cursor: 'pointer',
    //     //   textIndent: '-9999rem',
    //     //   marginTop: '0.15em',
    //     //   transition: 'opacity .20s ease-in-out',
    //     //   height: '1em',
    //     //   width: '1em',
    //     //   iconColor: 'currentColor',
    //     //   icon: iconColor =>
    //     //     `<svg fill="${iconColor}" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z" /></svg>`,
    //     //   '&:not(:hover)': {
    //     //     opacity: 0.5
    //     //   }
    //     // }
    //   },
    // }),
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern: /^ember-power-select-/,
    },
  ],
  plugins: [],
};
