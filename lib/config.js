'use strict';

const path = require('path');
const defaultConfig = require('./default');
const ResolveFile = require('./resolve-file');

class Config {
  calculate(options = {}) {
    const config = Object.assign({}, defaultConfig, ResolveFile.getMainConfig());

    config.tsLint = this._resolve(config.tsLint);
    config.tsConfig = this._resolve(config.tsConfig);
    config.outputDir = this._resolve(config.outputDir);
    config.sourceDir = this._resolve(config.sourceDir);

    return Object.assign(config, options);
  }

  _resolve(filePath) {
    return path.isAbsolute(filePath)
      ? filePath
      : path.resolve(process.cwd(), filePath)
  }
}

module.exports = Config;
