'use strict';

const performance = require('./performance');

describe('performance', function() {
  it('should be disabled in development', function() {
    expect(performance(this.config)).to.eql({
      hints: false
    });
  });

  it('should be enabled in production', function() {
    this.config.env = 'production';

    expect(performance(this.config)).to.eql({
      hints: 'warning'
    });
  });
});
