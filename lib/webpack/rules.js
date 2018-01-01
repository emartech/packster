'use strict';

module.exports = function(config) {
  return [
    require('./rules/typescript')(config),
    require('./rules/html')(config),
    require('./rules/pug')(config),
    require('./rules/css')(config),
    require('./rules/sass')(config),
    require('./rules/css-external')(config),
    require('./rules/sass-external')(config)
  ].filter(rule => rule);
};
