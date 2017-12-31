'use strict';

const resolve = require('./resolve');

describe('resolve', function() {
  it('should return modules and extensions', function() {
    expect(resolve(this.config)).to.eql({
      modules: [
        'src',
        'node_modules'
      ],
      extensions: ['.ts', '.js', '.json']
    });
  });
});
