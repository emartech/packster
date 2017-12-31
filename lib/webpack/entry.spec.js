'use strict';

const entry = require('./entry');

describe('entry', function() {
  it('should use bundle by default', function() {
    expect(entry(this.config)).to.eql({
      main: 'src/main.ts'
    });
  });

  it('should use hash when enabled', function() {
    this.config.vendors = ['moment'];

    expect(entry(this.config)).to.eql({
      main: 'src/main.ts',
      vendor: ['moment']
    });
  });
});
