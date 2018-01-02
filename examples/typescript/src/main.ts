'use strict';

require('./style.css');
const container = document.getElementById('container');
import { TimeDisplay } from './app/time-display/time-display';

const display = new TimeDisplay(container);

display.displayInConsole();
display.displayInContainer();
