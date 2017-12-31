'use strict';

const rules = require('./rules');

describe('rules', function() {
  it('should return enabled rules', function() {
    expect(rules(this.config)).to.eql([
      {
        test: /\.ts/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.json'
            }
          }
        ]
      },
      {
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
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]);
  });
});
