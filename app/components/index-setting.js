import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import ActionInvoker from '../lib/action-invoker';
import { inject as service } from '@ember/service';

export default class FormIndexSettingComponent extends Component {
  @service toaster;

  @tracked value;
  @tracked error;

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();
  }

  @action
  save(newValue) {
    this.error = null;

    try {
      return this.args.index
        .updateSetting(JSON.parse(newValue), this.args.setting.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.error = error.error || error;
    }
  }

  @action
  async setValue() {
    this.value = await this.args.index.getSetting(this.args.setting.name);
    this.error = null;
  }

  @action
  reset() {
    this.error = null;

    try {
      return this.args.index
        .resetSetting(this.args.setting.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.error = error.error || error;
    }
  }

  @action
  onDidChangeValidation(error) {
    this.error = error;
  }
}
