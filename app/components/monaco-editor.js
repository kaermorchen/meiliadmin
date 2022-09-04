import { action } from '@ember/object';
import Component from '@glimmer/component';
import * as monaco from 'monaco-editor';

window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'editorWorkerService') {
      return new Worker(
        new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url)
      );
    } else if (label === 'json') {
      return new Worker(
        new URL(
          'monaco-editor/esm/vs/language/json/json.worker',
          import.meta.url
        )
      );
    }
  },
};

export default class MonacoEditorComponent extends Component {
  @action
  initEditor(el) {
    this.editor = monaco.editor.create(el, {
      value: this.args.value,
      language: this.args.language,
      // scrollBeyondLastLine: false,
      // wordWrap: 'on',
      // wrappingStrategy: 'advanced',
      minimap: {
        enabled: false,
      },
      // overviewRulerLanes: 0,
    });
  }
}
