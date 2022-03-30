import Component from '@glimmer/component';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';

export default class ButtonGroupComponent extends Component {
  @action
  buttonPressed(value) {
    if (typeof this.args.onClick !== 'function') {
      return;
    }

    this.args.onClick(value);
  }
}
