import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class FormTableSettingsComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  get id() {
    return this.args.id ?? this.guid;
  }

  // @action
  // onChange(event) {
  //   if (this.args.onChange) {
  //     this.args.onChange(event.target.value, event);
  //   }
  // }
}
