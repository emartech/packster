'use strict';

const webpack = require('webpack');

module.exports = function(config) {
  if (config.env !== 'production') {
    return null;
  }

  return new webpack.optimize.ModuleConcatenationPlugin();
};
