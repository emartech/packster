'use strict';

const path = require('path');
const fs = require('fs');

class ResolveFile {
  static getWebpackConfig() {
    let webpackConfigPath = path.resolve(process.cwd(), 'webpack.config.js');

    if (fs.existsSync(webpackConfigPath)) {
      return require(webpackConfigPath);
    }

    webpackConfigPath = path.resolve(__dirname, '..', 'webpack.config.js');
    return require(webpackConfigPath);
  }

  static getKarmaConfigPath() {
    let karmaConfigPath = path.resolve(process.cwd(), 'karma.conf.js');

    if (fs.existsSync(karmaConfigPath)) {
      return karmaConfigPath;
    }

    karmaConfigPath = path.resolve(__dirname, '..', 'karma.conf.js');
    return karmaConfigPath;
  }

  static getMainConfig() {
    let mainConfigPath = path.resolve(process.cwd(), 'ngx-webpack.json');

    if (!fs.existsSync(mainConfigPath)) {
      return {};
    }

    return require(mainConfigPath);
  }

  static getTslintConfig() {
    let tslintConfigPath = path.resolve(process.cwd(), 'tslint.json');

    if (fs.existsSync(tslintConfigPath)) {
      return tslintConfigPath;
    }

    tslintConfigPath = path.resolve(__dirname, '..', 'tslint.json');
    return tslintConfigPath;
  }
}

module.exports = ResolveFile;
