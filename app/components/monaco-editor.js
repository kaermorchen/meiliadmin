import { action } from '@ember/object';
import Component from '@glimmer/component';

import 'monaco-editor/esm/vs/editor/browser/coreCommands.js';
import 'monaco-editor/esm/vs/editor/contrib/find/browser/findController.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

// This is needed because the SimpleWorker.js in monaco-editor has the following code:
// loaderConfiguration = self.requirejs.s.contexts._.config;
window.requirejs.s = {
  contexts: {
    _: {
      config: '',
    },
  },
};

export default class MonacoEditorComponent extends Component {
  constructor(owner, args) {
    super(owner, args);

    this.args.invoker?.subscribe(this);
  }

  @action
  initEditor(el) {
    // let codeModel = monaco.editor.createModel(this.args.code, this.args.language)
    // let height = codeModel.getLineCount() * 20;
    // el.style.height = height.toString() + "px";

    this.editor = monaco.editor.create(el, {
      // model: codeModel,
      // theme: 'vs-dark',
      // readOnly: this.readOnly,
      // minimap: { enabled: false },
      // wordWrap: "on",
      // scrollBeyondLastLine: false,
      // wrappingIndent: 'same'

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
    // if (this.args.onChange) {
    //   this.editor.onDidChangeModelContent(() => {
    //     this.args.onChange(this.editor.getValue());
    //   });
    // }

    // Autoresize height of element
    this.editor.onDidContentSizeChange(() => {
      const contentHeight = Math.min(
        Math.max(this.editor.getContentHeight(), 160),
        420
      );

      el.style.height = `${contentHeight + 1}px`;
      this.editor.layout();
    });
  }

  @action
  updateValue(el, [value]) {
    if (value !== this.editor.getValue()) {
      this.editor?.setValue(value);
    }
  }

  @action
  invokeSendValue() {
    this.args.sendValue?.(this.editor.getValue());
  }

  willDestroy() {
    this.editor?.dispose();

    super.willDestroy(...arguments);
  }
}
