'use strict';

const path = require('path');

module.exports = function(webpackConfig, config) {
  const entry = config.language === 'typescript'?
    'test.ts':
    'test.js';
  const testFile = path.join(config.sourceDir, entry);

  const vendorFiles = config.vendors ?
    config.vendors.map(
      file => {
        return { pattern: require.resolve(file) };
      }
    ):
    [];

  return {
    basePath: process.cwd(),

    frameworks: ['jasmine'],

    files: vendorFiles.concat([{ pattern: testFile }]),

    preprocessors: {
      [testFile]: ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: webpackConfig,
    webpackServer: { noInfo: true },

    port: 9876,

    colors: true,

    logLevel: 'INFO',

    browsers: config.browsers,

    customLaunchers: {
      ChromeFast: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-component-extensions-with-background-pages',
          '--disable-renderer-backgrounding',
          '--disable-background-networking',
          '--disable-boot-animation',
          '--disable-cloud-import',
          '--disable-component-cloud-policy',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-sync',
          '--bwsi',
          '--disable-gpu'
        ]
      }
    },

    mime: {
      'text/x-typescript': ['ts']
    },

    autoWatch: !config.singleRun,
    singleRun: config.singleRun
  };
};
