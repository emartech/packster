'use strict';

const webpack = require('webpack');

module.exports = function(config) {
  if (config.env === 'test' || !config.vendors) {
    return null;
  }

  return new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'vendor'], minChunks: Infinity });
};
