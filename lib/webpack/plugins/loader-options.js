'use strict';

const webpack = require('webpack');

module.exports = function({ env }) {
  const isProduction = env === 'production';

  return new webpack.LoaderOptionsPlugin({
    debug: !isProduction,
    minimize: isProduction
  });
};
