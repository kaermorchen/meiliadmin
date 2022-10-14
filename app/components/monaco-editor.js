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
    const modelUri = monaco.Uri.parse(this.args.uri);
    const model = monaco.editor.createModel(
      this.args.value,
      this.args.language,
      modelUri
    );

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: this.args.uri,
          fileMatch: this.args.uri,
          schema: this.args.schema,
        },
      ],
    });

    this.editor = monaco.editor.create(el, {
      model,
      // theme: 'vs-dark', //TODO: add checking global theme
      readOnly: this.args.readOnly ?? false,
      // wordWrap: 'on',
      // wrappingIndent: 'same',
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
