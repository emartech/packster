'use strict';

import * as moment from 'moment';
const template = require('./time-display.template.pug');
const style = require('./time-display.style.scss');

export class TimeDisplay {
  constructor(private container) {}

  displayInConsole() {
    console.log(moment().format('YYYY-MM-DD hh:mm:ss'));
  }

  displayInContainer() {
    this.container.innerHTML = template
      .replace('[placeholder]', moment().format('YYYY-MM-DD hh:mm:ss'))
      .replace('[style]', style);
  }
}
