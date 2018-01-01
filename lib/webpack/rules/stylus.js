'use strict';

const path = require('path');

module.exports = function(config) {
  return {
    test: /\.styl$/,
    include: path.join(config.sourceDir, config.appDir),
    loaders: ['to-string-loader', 'css-loader', 'stylus-loader']
  };
};
