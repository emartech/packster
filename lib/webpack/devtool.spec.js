'use strict';

const devtool = require('./devtool');

describe('entry', function() {
  it('should use cheap sourcemap in development', function() {
    expect(devtool(this.config)).to.eql('cheap-module-source-map');
  });

  it('should inline sourcemap in tests', function() {
    this.config.env = 'test';

    expect(devtool(this.config)).to.eql('inline-source-map');
  });

  it('should use normal sourcemap in production', function() {
    this.config.env = 'production';

    expect(devtool(this.config)).to.eql('source-map');
  });
});
