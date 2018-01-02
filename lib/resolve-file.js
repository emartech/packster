'use strict';

const path = require('path');
const fs = require('fs');

class ResolveFile {
  static getMainConfig() {
    const jsConfigPath = path.resolve(process.cwd(), 'packster.config.js');
    const jsonConfigPath = path.resolve(process.cwd(), 'packster.config.json');

    if (fs.existsSync(jsConfigPath)) {
      return require(jsConfigPath);
    }

    if (fs.existsSync(jsonConfigPath)) {
      return require(jsonConfigPath);
    }

    return {};
  }

  static getTslintConfigPath() {
    const tslintConfigPath = path.resolve(process.cwd(), 'tslint.json');

    if (fs.existsSync(tslintConfigPath)) {
      return tslintConfigPath;
    }

    return path.resolve(__dirname, '..', 'tslint.json');
  }

  static getTsconfigPath(pathFromConfig) {
    if (path.isAbsolute(pathFromConfig)) {
      return pathFromConfig;
    }

    const configPath = path.resolve(process.cwd(), pathFromConfig);

    if (fs.existsSync(configPath)) {
      return configPath;
    }

    return path.resolve(__dirname, '..', pathFromConfig);
  }

  static resolve(filePath) {
    return path.isAbsolute(filePath)
      ? filePath
      : path.resolve(process.cwd(), filePath)
  }
}

module.exports = ResolveFile;
