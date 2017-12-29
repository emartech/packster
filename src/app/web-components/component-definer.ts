import { DialogOpenerElement } from './dialog-opener/dialog-opener.element';

export class ComponentDefiner {
  public static defineAllElements() {
    this.defineElement('pe-opener', DialogOpenerElement);
  }

  public static defineElement(identifier: string, element) {
    if (!window.customElements.get(identifier)) {
      window.customElements.define(identifier, element);
    }
  }
}
