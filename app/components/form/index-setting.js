import { action } from '@ember/object';
import { capitalize } from '@ember/string';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormIndexSettingComponent extends Component {
  @tracked value;

  constructor() {
    super(...arguments);

    const fnName = `get${capitalize(this.args.name)}`;

    this.args.index[fnName]().then((result) => {
      this.value = JSON.stringify(result);
    });
  }

  get capitalizeName() {
    return capitalize(this.args.name);
  }

  @action
  save(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = formData.get(this.args.name);
    const fnName = `update${this.capitalizeName}`;

    this.args.index[fnName](JSON.parse(data));
  }

  @action
  async cancel() {
    const fnName = `get${this.capitalizeName}`;
    const oldValue = await this.args.index[fnName]();

    this.value = JSON.stringify(oldValue);
  }

  @action
  async reset() {
    const fnName = `reset${this.capitalizeName}`;

    this.args.index[fnName]();
  }
}
