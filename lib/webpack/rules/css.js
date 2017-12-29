'use strict';

module.exports = function(config) {
  if (config.styleFormat !== 'css') {
    return null;
  }

  return {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader']
  };
};
