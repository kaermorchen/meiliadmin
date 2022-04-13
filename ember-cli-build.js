'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-power-select': {
      theme: false,
    },
    postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.*tailwind.config.js$/],
        plugins: [
          require('tailwindcss/nesting'),
          require('tailwindcss')('./config/tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
