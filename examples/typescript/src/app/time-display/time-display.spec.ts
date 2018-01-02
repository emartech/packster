import { TimeDisplay } from './time-display';

describe('TimeDisplay', function() {
  let container;

  beforeEach(function() {
    const time = new Date(2013, 9, 23, 11, 0, 0);
    jasmine.clock().install();
    jasmine.clock().mockDate(time);

    container = {
      innerHTML: null
    };
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  describe('#displayInConsole', function() {
    it('should display time in console', function() {
      spyOn(console, 'log');
      const subject = new TimeDisplay(container);

      subject.displayInConsole();

      expect(console.log).toHaveBeenCalledWith('2013-10-23 11:00:00');
    });
  });

  describe('#displayInConsole', function() {
    it('should display time in container', function() {
      const subject = new TimeDisplay(container);

      subject.displayInContainer();

      expect(container.innerHTML).toEqual('<h1>2013-10-23 11:00:00</h1><h3>h3 {\n' +
        '  padding-left: 25px; }\n' +
        '</h3>');
    });
  });
});
