import { action } from '@ember/object';
import Component from '@glimmer/component';
import {
  Uri,
  editor,
  languages,
} from 'monaco-editor/esm/vs/editor/editor.api.js';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';

// This is needed because the SimpleWorker.js in monaco-editor has the following code:
// loaderConfiguration = self.requirejs.s.contexts._.config;
window.requirejs.s = {
  contexts: {
    _: {
      config: '',
    },
  },
};

function getModelUri(uri) {
  return Uri.parse(uri);
}

function getModel(value, language, uri, schema) {
  const modelUri = getModelUri(uri);
  let model = editor.getModel(modelUri);

  if (model === null) {
    model = editor.createModel(value, language, modelUri);

    if (language === 'json' && schema) {
      languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [schema],
      });
    }
  }

  return model;
}

export default class MonacoEditorComponent extends Component {
  @service session;

  constructor(owner, args) {
    super(owner, args);

    this.args.invoker?.subscribe(this);
  }

  get theme() {
    if (this.args.theme) {
      return this.args.theme;
    } else if (this.session.data.theme === 'dark') {
      return 'vs-dark';
    } else if (this.session.data.theme === 'light') {
      return 'vs-light';
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'vs-dark';
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'vs-light';
    }

    return null;
  }

  @action
  themeDidChange() {
    editor.setTheme(this.theme);
  }

  @action
  initEditor(el) {
    const options = {
      theme: this.theme,
      readOnly: this.args.readOnly ?? false,
      language: this.args.language,
      // wordWrap: 'on',
      // wrappingIndent: 'same',
      lineNumbers: 'off',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false,
      },
      scrollbar: {
        alwaysConsumeMouseWheel: false,
      },
    };

    if (this.args.uri) {
      options.model = getModel(
        this.args.value,
        this.args.language,
        this.args.uri,
        this.args.schema
      );
    } else if (this.args.value) {
      options.value = this.args.value;
    }

    this.editor = editor.create(el, options);

    if (Array.isArray(this.args.actions)) {
      this.args.actions.forEach((item) => {
        // assign because item can be a proxy object
        this.editor.addAction(Object.assign({}, item));
      });
    }

    const minHeight = this.args.minHeight ?? 160;
    const maxHeight = this.args.maxHeight ?? 420;
    // Autoresize height of element
    const onDidContentSizeChangeHandler = this.editor.onDidContentSizeChange(
      () => {
        const contentHeight = Math.min(
          Math.max(this.editor.getContentHeight(), minHeight),
          maxHeight
        );

        el.style.height = `${contentHeight + 1}px`;
        this.editor.layout();
      }
    );
    registerDestructor(this, onDidContentSizeChangeHandler.dispose);

    // Validation
    const onDidChangeMarkersHandler = editor.onDidChangeMarkers(() => {
      this.args.onDidValidation?.(
        editor.getModelMarkers().map((item) => item.message)
      );
    });
    registerDestructor(this, onDidChangeMarkersHandler.dispose);
  }

  @action
  updateValue() {
    const model = this.editor.getModel();

    if (model.uri.toString() !== this.args.uri) {
      const newModel = getModel(
        this.args.value,
        this.args.language,
        this.args.uri,
        this.args.schema
      );

      this.editor.setModel(newModel);
      model.dispose();
    } else {
      this.editor.setValue(this.args.value);
    }
  }

  @action
  invokeSendValue() {
    this.args.sendValue?.(this.editor.getValue());
  }

  willDestroy() {
    this.editor.getModel()?.dispose();
    this.editor.dispose();

    super.willDestroy(...arguments);
  }
}
