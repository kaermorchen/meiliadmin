import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ActionInvoker from '../lib/action-invoker';
import { inject as service } from '@ember/service';
import { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';
import { registerDestructor } from '@ember/destroyable';

export default class FormIndexSettingComponent extends Component {
  @service toaster;

  @tracked value;
  @tracked errors = [];

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();

    // Checking errors
    const onDidChangeMarkersHandler = editor.onDidChangeMarkers(() => {
      this.errors = editor.getModelMarkers().map((item) => item.message);
    });
    registerDestructor(this, onDidChangeMarkersHandler.dispose);
  }

  @action
  save(newValue) {
    this.errors = [];

    try {
      return this.args.index
        .updateSetting(JSON.parse(newValue), this.args.setting.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.errors = [error.error || error];
    }
  }

  @action
  async setValue() {
    this.value = await this.args.index.getSetting(this.args.setting.name);
    this.error = [];
  }

  @action
  reset() {
    this.error = [];

    try {
      return this.args.index
        .resetSetting(this.args.setting.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.errors = [error.error || error];
    }
  }
}
