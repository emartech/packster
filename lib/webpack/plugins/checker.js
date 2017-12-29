'use strict';

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = function(config) {
  if (config.env === 'test') {
    return null;
  }

  return new CheckerPlugin();
};
