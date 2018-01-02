'use strict';

const moment = require('moment');
const template = require('./time-display.template.html');
const style = require('./time-display.style.css');

class TimeDisplay {
  constructor(container) {
    this._container = container;
  }

  displayInConsole() {
    console.log(moment().format('YYYY-MM-DD hh:mm:ss'));
  }

  displayInContainer() {
    this._container.innerHTML = template
      .replace('[placeholder]', moment().format('YYYY-MM-DD hh:mm:ss'))
      .replace('[style]', style);
  }
}

module.exports = TimeDisplay;
