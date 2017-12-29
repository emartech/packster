'use strict';

module.exports = function(config) {
  return {
    entry: require('./entry')(config),

    output: require('./output')(config),

    module: {
      rules: require('./rules')(config)
    },

    plugins: require('./plugins')(config),

    context: config.sourceDir,

    resolve: require('./resolve')(config),

    devtool: require('./devtool')(config),

    performance: require('./performance')(config),

    devServer: require('./dev-server')(config)
  };
};
