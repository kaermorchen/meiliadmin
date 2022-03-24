module.exports = {
  content: ['./app/**/*.html', './app/**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#E5E7EB',
        secondary: '#374151',
        dark: '#1F2937',
        primary: '#2563EB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
