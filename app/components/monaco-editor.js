import { action } from '@ember/object';
import Component from '@glimmer/component';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

export default class MonacoEditorComponent extends Component {
  @action
  initEditor(el) {
    this.editor = monaco.editor.create(el, {
      value: this.args.value,
      language: this.args.language,
      lineNumbers: 'off',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false,
      },
    });

    // Add onChange event
    if (this.args.onChange) {
      this.editor.onDidChangeModelContent(() => {
        this.args.onChange(this.editor.getValue());
      });
    }

    // autoresize height of element
    const disposable = this.editor.onDidContentSizeChange(() => {
      const contentHeight = Math.min(320, this.editor.getContentHeight());
      el.style.height = `${contentHeight}px`;
      this.editor.layout();
      disposable.dispose();
    });
  }

  willDestroy() {
    this.editor?.dispose();

    super.willDestroy(...arguments);
  }
}
