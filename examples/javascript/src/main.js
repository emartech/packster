'use strict';

require('./style.css');
const container = document.getElementById('container');
const TimeDisplay = require('./app/time-display/time-display');

const display = new TimeDisplay(container);

display.displayInConsole();
display.displayInContainer();
