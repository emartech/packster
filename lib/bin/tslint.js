'use strict';

const tslintRunner = require('tslint/lib/runner').run;
const ResolveFile = require('../resolve-file');
const path = require('path');

module.exports = function(config) {
  const options = {
    config: ResolveFile.getTslintConfigPath(),
    files: [
      path.join(config.sourceDir, '**/*.ts')
    ],
    fix: false,
    force: false,
    format: 'prose',
    init: false,
    typeCheck: true,
    version: false
  };

  return tslintRunner(options, console)
    .then((status) => {
      if (status !== 0) {
        process.exit(1);
      }
    });
};

