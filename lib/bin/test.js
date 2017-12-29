'use strict';

const Server = require('karma').Server;
const generateWebpackConfig = require('../webpack/index');
const generateKarmaConfig = require('../karma/index');

module.exports = function(config) {
  const webpackConfig = generateWebpackConfig(config);
  const karmaConfig = generateKarmaConfig(webpackConfig, config);

  console.log('> karma start');
  let server = new Server(
    karmaConfig, (errorCode) => {
      if (errorCode) {
        console.log(`> karma error code: ${errorCode}`);
        process.exit(errorCode);
      }
    }
  );

  server.start();
};


