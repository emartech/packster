'use strict';

module.exports = function(config) {
  return [
    require('./rules/typescript')(config),
    require('./rules/html')(config),
    require('./rules/css')(config),
    require('./rules/css-external')(config),
  ].filter(rule => rule);
};
