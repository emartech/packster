'use strict';

const argv = require('minimist')(process.argv.slice(2));

const Config = require('../lib/config');
const start = require('../lib/bin/start');
const lint = require('../lib/bin/lint');
const test = require('../lib/bin/test');
const build = require('../lib/bin/build');
const deploy = require('../lib/bin/deploy');
const merge = require('../lib/bin/merge');

const task = argv._[0];

switch (task) {
  case 'start':
    start((new Config()).calculate({ env: 'development' }));
    break;
  case 'lint':
    lint((new Config()).calculate({ env: 'development' }));
    break;
  case 'test':
    test((new Config()).calculate({ env: 'test', singleRun: true }));
    break;
  case 'test:watch':
    test((new Config()).calculate({ env: 'test', singleRun: false }));
    break;
  case 'build':
    build((new Config()).calculate({ env: 'production' }));
    break;
  case 'deploy:staging':
    process.env.DEPLOY_ENV = 'staging';
    deploy((new Config()).calculate({ env: 'production' }));
    break;
  case 'deploy:production':
    process.env.DEPLOY_ENV = 'production';
    deploy((new Config()).calculate({ env: 'production' }));
    break;
  case 'merge':
    merge((new Config()).calculate({ env: 'production' }));
    break;
  default:
    console.log(`Unsupported task ${task}.`);
    console.log('It can be one of the following: start,lint,test,test:watch,build,deploy:staging,deploy:production,merge');
}
