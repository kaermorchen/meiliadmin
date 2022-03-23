module.exports = {
  purge: [
    // './app/**/*.html',
    // './app/**/*.hbs',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        base: '1.5rem',
      },
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
