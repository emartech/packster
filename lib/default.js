'use strict';

module.exports = {
  env: 'development',
  port: 3000,
  language: 'typescript',
  outputDir: 'dist',
  sourceDir: 'src',
  appDir: 'app',
  tsConfig: 'tsconfig.json',
  tsLint: 'tslint.json',
  esLint: '.eslintrc',
  liveReload: true,
  useHash: false,
  vendors: false,
  browsers: ['ChromeFast'],
  singleRun: true
};
