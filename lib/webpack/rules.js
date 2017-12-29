'use strict';

module.exports = function(config) {
  return [
    require('./rules/html')(config),
    require('./rules/css')(config),
    require('./rules/typescript')(config)
  ].filter(rule => rule);
};
