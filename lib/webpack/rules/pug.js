'use strict';

module.exports = function() {
  return {
    test: /\.(pug|jade)/,
    loaders: ['apply-loader', 'pug-loader']
  };
};
