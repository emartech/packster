'use strict';

const path = require('path');

module.exports = function(config) {
  const entries = {
    main: path.join(config.sourceDir, 'main.ts')
  };

  if (config.vendors !== false) {
    entries.vendor = config.vendors;
  }

  return entries;
};
