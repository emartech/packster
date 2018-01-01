'use strict';

const path = require('path');

module.exports = function(config) {
  return {
    test: /\.(sass|scss)$/,
    include: path.join(config.sourceDir, config.appDir),
    loaders: ['to-string-loader', 'css-loader', 'sass-loader']
  };
};
