'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: autoprefixer,
            options: {}
          },
          {
            module: tailwind,
            options: {
              config: './config/tailwind.config.js'
            }
          }
        ],
      }
    }
  });

  return app.toTree();
};
