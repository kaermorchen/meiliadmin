import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormIndexSettingComponent extends Component {
  @tracked value;
  @tracked error;

  constructor() {
    super(...arguments);

    this.setInitialValue();
  }

  @action
  save(newValue) {
    this.error = null;

    try {
      this.args.index.updateSetting(this.args.name, JSON.parse(newValue));
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
  async reset() {
    await this.args.index.resetSetting(this.args.name);
    this.error = null;
  }
}
