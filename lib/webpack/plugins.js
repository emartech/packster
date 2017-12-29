'use strict';

module.exports = function(config) {
  return [
    require('./plugins/loader-options')(config),
    require('./plugins/progress')(config),
    require('./plugins/define')(config),
    require('./plugins/checker')(config),
    require('./plugins/commons-chunk')(config),
    require('./plugins/module-concatenation')(config),
    require('./plugins/uglify-js')(config)
  ].filter(plugin => plugin);
};
