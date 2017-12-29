import { ConnectorService } from '../../services/connector/connector.service';
const template = require('./dialog-opener.template.html');

export class DialogOpenerElement extends HTMLElement {
  public connector: ConnectorService;
  public state: string = '{}';

  insertTemplate(personalizationState) {
    this.dispatchEvent(new CustomEvent('insertTemplate', {
      detail: personalizationState.preview,
      bubbles: true
    }));
  }

  connectedCallback() {
    this.render();

    this.addEventListener('click', () => {
      console.log('open-dialog');
    });
  }

  render() {
    this.innerHTML = template;
  }
}
