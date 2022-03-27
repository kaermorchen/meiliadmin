import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputCheckboxComponent extends Component {
  @action
  onChange() {
    if (this.args.onChange) {
      this.args.onChange(!this.args.checked);
    }
  }
}
