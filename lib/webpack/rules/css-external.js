'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
  return {
    test: /\.css$/,
    exclude: path.join(config.sourceDir, config.appDir),
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader']
    })
  };
};
