'use strict';

const webpack = require('webpack');

module.exports = function(config) {
  return new webpack.DefinePlugin({
    ENV: JSON.stringify(config.env)
  })
};
