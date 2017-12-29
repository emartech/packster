'use strict';

const publisher = require('@emartech/client-publish');

module.exports = function() {
  return publisher.merge();
};
