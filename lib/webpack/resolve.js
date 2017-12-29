'use strict';

module.exports = function(config) {
  return {
    modules: [
      config.sourceDir,
      'node_modules'
    ],
    extensions: ['.ts', '.js', '.json']
  }
};
