'use strict';

const webpack = require('webpack');

module.exports = function(config) {
  if (config.env !== 'production') {
    return null;
  }

  return new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    mangle: { screw_ie8 : true },
    compress: {
      screw_ie8: true,
      warnings: false
    },
    comments: false
  });
};
