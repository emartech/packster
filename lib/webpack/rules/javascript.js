'use strict';

module.exports = function() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    }
  };
};
