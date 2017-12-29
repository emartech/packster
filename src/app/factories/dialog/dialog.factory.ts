export class DialogFactory {
  private id = 'personalization-dialog';
  private iframeId = 'personalization-iframe';

  constructor(private context: HTMLElement, private editorUrl: string) {}

  public append() {
    if (this.getElement()) {
      return;
    }

    this.context.appendChild(this.createElement());
  }

  public getElement() {
    return this.context.querySelector(`#${this.id}`);
  }

  public getIframeElement() {
    return this.context.querySelector(`#${this.iframeId}`);
  }

  private createElement() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    return wrapper.querySelector(`#${this.id}`);
  }

  private getTemplate() {
    return `
        <e-dialog id="${this.id}" headline="Content Personalization" class="e-dialog-iframe" cache="true">
            <iframe id="${this.iframeId}" src="${this.editorUrl}" style="height:540px;"></iframe>
        </e-dialog>`;
  }
}
