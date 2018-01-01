'use strict';

module.exports = {
  env: 'development',
  port: 3000,
  outputDir: 'dist',
  sourceDir: 'src',
  appDir: 'app',
  tsConfig: 'tsconfig.json',
  tsLint: 'tslint.json',
  liveReload: true,
  useHash: false,
  vendors: false,
  browsers: ['ChromeFast'],
  singleRun: true
};
