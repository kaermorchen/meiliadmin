'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

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

  return require('@embroider/compat').compatBuild(app, Webpack, {
    // staticAddonTestSupportTrees: true,
    // staticAddonTrees: true,
    // staticHelpers: true,
    // staticModifiers: true,
    // staticComponents: true,
    // splitAtRoutes: ['route.name'],
    // packagerOptions: {
    //    webpackConfig: { }
    // }
  });
};
