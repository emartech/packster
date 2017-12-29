'use strict';

const rimraf = require('rimraf');
const webpack = require('webpack');
const generateWebpackConfig = require('../webpack/index');

module.exports = function(config) {
  const webpackConfig = generateWebpackConfig(config);
  const compiler = webpack(webpackConfig);

  console.log('> webpack');
  rimraf.sync(webpackConfig.output.path);

  compiler.run((e, output) => {
    console.log(output.toString());
    if (e) {
      console.error(e);
      process.exit(1);
    }
  });
};
