'use strict';

const devServer = require('./dev-server');

describe('dev server', function() {
  it('should use config values', function() {
    expect(devServer(this.config)).to.eql({
      contentBase: 'src',
      port: 3000,
      inline: true,
      historyApiFallback: true,
      stats: 'errors-only',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 500
      }
    });
  });
});
