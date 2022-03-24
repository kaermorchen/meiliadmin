import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';

export default class InputTextComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  get id() {
    return this.args.id ?? this.guid;
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value, event);
    }
  }
}
