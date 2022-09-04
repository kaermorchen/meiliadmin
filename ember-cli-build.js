'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

function isProduction() {
  return EmberApp.env() === 'production';
}

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-simple-auth': {
      useSessionSetupMethod: true,
    },
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    // splitAtRoutes: [],
    packagerOptions: {
      // publicAssetURL is used similarly to Ember CLI's asset fingerprint prepend option.
      publicAssetURL: '/',
      // Embroider lets us send our own options to the style-loader
      cssLoaderOptions: {
        // don't create source maps in production
        sourceMap: isProduction() === false,
        // enable CSS modules
        modules: {
          // global mode, can be either global or local
          // we set to global mode to avoid hashing tailwind classes
          mode: 'global',
          // class naming template
          localIdentName: isProduction()
            ? '[sha512:hash:base64:5]'
            : '[path][name]__[local]',
        },
      },
      webpackConfig: {
        module: {
          rules: [
            { test: /\.ttf$/, type: 'asset/resource' },
            {
              // When webpack sees an import for a CSS files
              test: /\.css$/i,
              exclude: /node_modules/,
              use: [
                {
                  // use the PostCSS loader addon
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isProduction() === false,
                    postcssOptions: {
                      config: './config/postcss.config.js',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
    extraPublicTrees: [],
  });
};
