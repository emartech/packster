import { DialogFactory } from './dialog.factory';

describe('DialogFactory', () => {
  let context;
  let subject: DialogFactory;
  const editorUrl = 'http://test.io';

  beforeEach(() => {
    context = document.createElement('div');
    spyOn(context, 'appendChild').and.callThrough();
    subject = new DialogFactory(context, editorUrl);
  });

  describe('#append', () => {
    it('should append e-dialog to the context', () => {
      subject.append();

      expect(context.appendChild).toHaveBeenCalledWith(subject.getElement());
    });

    it('should contain the editor url as the source of the iframe', () => {
      subject.append();
      const regex = `<iframe [^>]*(src="${editorUrl}")`;

      expect(subject.getElement().innerHTML).toMatch(regex);
    });

    it('should not call appendChild when called repeatedly', () => {
      subject.append();
      subject.append();

      expect(context.appendChild).toHaveBeenCalledTimes(1);
    });

    it('should not call appendChild on context if e-dialog already exists in dom', () => {
      spyOn(context, 'querySelector').and.callFake(selector => selector === '#personalization-dialog' ? true : null);
      subject.append();

      expect(context.appendChild).not.toHaveBeenCalled();
    });

    it('should set cache attribute to true', () => {
      subject.append();

      expect(subject.getElement().getAttribute('cache')).toBeTruthy();
    });
  });

  describe('#getElement', () => {
    it('should return null when append was not called and element does not exist in dom', () => {
      expect(subject.getElement()).toBeNull();
    });

    it('should return the appended element when append was called', () => {
      subject.append();

      const expectedElement = context.querySelector('#personalization-dialog');

      expect(subject.getElement()).toEqual(expectedElement);
    });

    it('should return the already existing element in dom', () => {
      context.innerHTML = '<div id="personalization-dialog">html fetched from suite</div>';

      const expectedElement = context.querySelector('#personalization-dialog');

      expect(subject.getElement()).toEqual(expectedElement);
    });
  });

  describe('#getIframeElement', () => {
    it('should return null when append was not called and iframe element does not exist in dom', () => {
      expect(subject.getIframeElement()).toBeNull();
    });

    it('should return the appended iframe element when append was called', () => {
      subject.append();

      const expectedElement = context.querySelector('#personalization-dialog iframe');

      expect(subject.getIframeElement()).toEqual(expectedElement);
    });
  });
});
