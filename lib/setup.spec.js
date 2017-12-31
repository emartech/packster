'use strict';

const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const deepExtend = require('deep-extend');

const defaultConfig = require('./default');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

beforeEach(function() {
  this.sinon = sinon.createSandbox();
  this.clock = sinon.useFakeTimers();
  this.config = deepExtend({}, defaultConfig);
});

afterEach(function() {
  this.sinon.restore();
  delete this.sinon;
  this.clock.restore();
  delete this.clock;
});
