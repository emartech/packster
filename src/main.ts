import { getBrowserConfig } from './app/configs/config-factory';
import { ComponentDefiner } from './app/web-components/component-definer';
import { ConnectorService } from './app/services/connector/connector.service';
import { DialogOpenerElement } from './app/web-components/dialog-opener/dialog-opener.element';
import { DialogFactory } from './app/factories/dialog/dialog.factory';

require('./external.css');

const dialog = new DialogFactory(document.body, getBrowserConfig().editorUrl);
dialog.append();

const connector = new ConnectorService(
  window,
  dialog.getElement(),
  dialog.getIframeElement()
);

DialogOpenerElement.prototype.connector = connector;
ComponentDefiner.defineAllElements();
