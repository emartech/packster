'use strict';

const webpack = require('webpack');

module.exports = function() {
  return new webpack.ProgressPlugin();
};
