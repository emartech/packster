'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const generateWebpackConfig = require('../webpack/index');

module.exports = function(config) {
  const webpackConfig = generateWebpackConfig(config);
  const compiler = webpack(webpackConfig);

  console.log(`> webpack-dev-server listening on port ${webpackConfig.devServer.port}`);
  const server = new WebpackDevServer(compiler, webpackConfig.devServer);
  server.listen(webpackConfig.devServer.port);
};
