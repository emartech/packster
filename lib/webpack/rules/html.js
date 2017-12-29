'use strict';

module.exports = function(config) {
  if (config.templateFormat !== 'html') {
    return null;
  }

  return {
    test: /\.html$/,
    loader: 'html-loader',
    query: {
      removeAttributeQuotes: false,
      caseSensitive: true,
      customAttrSurround: [
        [/#/, /(?:)/],
        [/\*/, /(?:)/],
        [/\[?\(?/, /(?:)/]
      ],
      customAttrAssign: [/\)?\]?=/]
    }
  };
};
