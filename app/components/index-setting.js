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

    this.setInitialValue();
  }

  @action
  save(newValue) {
    this.error = null;

    try {
      return this.args.index
        .updateSetting(JSON.parse(newValue), this.args.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.error = error.error || error;
    }
  }

  @action
  async setInitialValue() {
    this.value = await this.args.index.getSetting(this.args.name);
    this.error = null;
  }

  @action
  reset() {
    this.error = null;

    try {
      return this.args.index
        .resetSetting(this.args.name)
        .then(this.toaster.taskToast);
    } catch (error) {
      this.error = error.error || error;
    }
  }
}
