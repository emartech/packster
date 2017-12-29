
export class ConnectorService {
  protected window;
  protected dialogElement;
  protected iframeElement;
  protected lastOpener;

  constructor(window, dialogElement, iframeElement) {
    this.window = window;
    this.dialogElement = dialogElement;
    this.iframeElement = iframeElement;
  }

  public openDialog(openerElement) {
    this.lastOpener = openerElement;
    this.dialogElement.open({ cache: true });
    this.sendState(openerElement.state);
  }

  public sendState(state) {
    this.sendMessage('state', state);
  }

  private sendMessage(type, data) {
    this.iframeElement.contentWindow.postMessage(`{"type": "${type}", "data": ${data}}`, '*');
  }
}
