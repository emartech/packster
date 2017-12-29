'use strict';

const defaultConfig = require('./default');
const path = require('path');

class Config {
  calculate(options = {}) {
    const config = Object.assign({}, defaultConfig);

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
