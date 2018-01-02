'use strict';

const defaultConfig = require('./default');
const ResolveFile = require('./resolve-file');

class Config {
  calculate(options = {}) {
    const config = Object.assign({}, defaultConfig, ResolveFile.getMainConfig(), options);

    config.tsLint = ResolveFile.getTsconfigPath(config.tsLint);
    config.tsConfig = ResolveFile.getTsconfigPath(config.tsConfig);
    config.outputDir = ResolveFile.resolve(config.outputDir);
    config.sourceDir = ResolveFile.resolve(config.sourceDir);

    return config;
  }
}

module.exports = Config;
