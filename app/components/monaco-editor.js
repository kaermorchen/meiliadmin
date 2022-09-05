import { action } from '@ember/object';
import Component from '@glimmer/component';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

export default class MonacoEditorComponent extends Component {
  @action
  initEditor(el) {
    this.editor = monaco.editor.create(el, {
      value: this.args.value,
      language: this.args.language,
      minimap: {
        enabled: false,
      },
    });
  }

  willDestroy() {
    this.editor?.dispose();

    super.willDestroy(...arguments);
  }
}
