'use strict';

const path = require('path');
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
        test: /\.(pug|jade)/,
        loaders: ['apply-loader', 'pug-loader']
      },
      {
        include: 'src/app',
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        include: 'src/app',
        test: /\.(sass|scss)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      },
      {
        include: 'src/app',
        test: /\.styl$/,
        loaders: ['to-string-loader', 'css-loader', 'stylus-loader']
      },
      {
        exclude: 'src/app',
        test: /\.css$/,
        loader: [
          {
            loader: path.join(process.cwd(), 'node_modules/extract-text-webpack-plugin/dist/loader.js'),
            options: {
              omit: 1,
              remove: true
            }
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        exclude: 'src/app',
        test: /\.(sass|scss)$/,
        loader: [
          {
            loader: path.join(process.cwd(), 'node_modules/extract-text-webpack-plugin/dist/loader.js'),
            options: {
              omit: 1,
              remove: true
            }
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        exclude: 'src/app',
        test: /\.styl$/,
        loader: [
          {
            loader: path.join(process.cwd(), 'node_modules/extract-text-webpack-plugin/dist/loader.js'),
            options: {
              omit: 1,
              remove: true
            }
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]);
  });
});
