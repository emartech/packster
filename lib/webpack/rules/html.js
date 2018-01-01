'use strict';

module.exports = function() {
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
