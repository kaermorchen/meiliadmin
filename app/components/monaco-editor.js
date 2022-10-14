import { action } from '@ember/object';
import Component from '@glimmer/component';
import { Uri, editor } from 'monaco-editor/esm/vs/editor/editor.api.js';

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

  get modelUri() {
    return Uri.parse(this.args.uri);
  }

  @action
  initEditor(el) {
    let model = editor.getModel(this.modelUri);

    if (model === null) {
      model = editor.createModel(
        this.args.value,
        this.args.language,
        this.modelUri
      );
    }

    this.editor = editor.create(el, {
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
