'use strict';

module.exports = function(config) {
  return {
    contentBase: config.sourceDir,
    port: config.port,
    inline: config.liveReload,
    historyApiFallback: true,
    stats: 'errors-only',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500
    }
  };
};

