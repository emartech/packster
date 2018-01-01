'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
  const suffix = config.useHash ? '[hash]' : 'bundle';

  return new ExtractTextPlugin(`style.${suffix}.css`);
};
