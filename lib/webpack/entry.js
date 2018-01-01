'use strict';

const path = require('path');

module.exports = function(config) {
  const entry = config.language === 'typescript'?
    'main.ts':
    'main.js';

  const entries = {
    main: path.join(config.sourceDir, entry)
  };

  if (config.vendors !== false) {
    entries.vendor = config.vendors;
  }

  return entries;
};
