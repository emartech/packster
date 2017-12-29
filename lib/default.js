'use strict';

module.exports = {
  env: 'development',
  port: 3000,
  outputDir: 'dist',
  sourceDir: 'src',
  templateFormat: 'html',
  styleFormat: 'css',
  tsConfig: 'tsconfig.json',
  tsLint: 'tslint.json',
  liveReload: true,
  useHash: false,
  vendors: false,
  browsers: ['ChromeFast'],
  singleRun: true
};
