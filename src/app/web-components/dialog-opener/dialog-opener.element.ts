import { ConnectorService } from '../../services/connector/connector.service';
const htmlTemplate = require('./dialog-opener.template.html');
const pugTemplate = require('./dialog-opener.template.pug');
const style = require('./dialog-opener.style.css');

console.log('html template', htmlTemplate);
console.log('pug template', pugTemplate);
console.log('css style', style);

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
    this.innerHTML = htmlTemplate;
  }
}
