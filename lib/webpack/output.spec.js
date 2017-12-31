'use strict';

const output = require('./output');

describe('output', function() {
  it('should use bundle by default', function() {
    expect(output(this.config)).to.eql({
      path: 'dist',
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.js.map',
      chunkFilename: '[id].chunk.js'
    });
  });

  it('should use hash when enabled', function() {
    this.config.useHash = true;

    expect(output(this.config)).to.eql({
      path: 'dist',
      filename: '[name].[hash].js',
      sourceMapFilename: '[name].[hash].js.map',
      chunkFilename: '[id].chunk.js'
    });
  });
});
