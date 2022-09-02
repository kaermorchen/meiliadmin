import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormIndexSettingComponent extends Component {
  @tracked value;

  constructor() {
    super(...arguments);

    this.setInitialValue();
  }

  @action
  save() {
    this.args.index.updateSetting(this.args.name, JSON.parse(this.value));
  }

  @action
  async setInitialValue() {
    const value = await this.args.index.getSetting(this.args.name);

    this.value = JSON.stringify(value);
  }

  @action
  async reset() {
    this.args.index.resetSetting(this.args.name);
  }
}
