'use strict';

module.exports = function(config) {
  return {
    test: /\.ts/,
    loaders: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: config.tsConfig
        }
      }
    ]
  };
};
