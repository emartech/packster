'use strict';

module.exports = function(config) {
  const suffix = config.useHash ? '[hash]' : 'bundle';

  return {
    path: config.outputDir,
    filename: `[name].${suffix}.js`,
    sourceMapFilename: `[name].${suffix}.js.map`,
    chunkFilename: '[id].chunk.js'
  };
};
