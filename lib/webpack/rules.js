'use strict';

module.exports = function(config) {
  return [
    require('./rules/typescript')(config),
    require('./rules/html')(config),
    require('./rules/css')(config)
  ].filter(rule => rule);
};
