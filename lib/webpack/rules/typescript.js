'use strict';

module.exports = function(config) {
  return {
    test: /\.ts/,
    exclude: /node_modules/,
    use: {
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: config.tsConfig
      }
    }
  };
};
