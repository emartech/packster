import { ConnectorService } from './connector.service';

describe('ConnectorService', () => {
  let fakeWindow;
  let subject: ConnectorService;
  let fakeDialog;
  let fakeIframe;

  beforeEach(() => {
    fakeWindow = jasmine.createSpyObj('window', ['addEventListener']);
    fakeDialog = jasmine.createSpyObj('dialog', ['open', 'close', 'setSize', 'setAttribute']);
    fakeIframe = {
      contentWindow: jasmine.createSpyObj('contentWindow', ['postMessage'])
    };
    spyOn(console, 'error');
    subject = new ConnectorService(fakeWindow, fakeDialog, fakeIframe);
  });

  describe('#sendState', () => {
    it('should call the iframe postMessage method with the given message', () => {
      const message = 'hello world';
      const expectedMessage = `{"type": "state", "data": ${message}}`;
      subject.sendState(message);

      expect(fakeIframe.contentWindow.postMessage).toHaveBeenCalledWith(expectedMessage, '*');
    });
  });
});
