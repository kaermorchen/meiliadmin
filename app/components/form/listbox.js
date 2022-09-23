import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class FormListboxComponent extends Component {
  get guid() {
    return guidFor(this);
  }

  get id() {
    return this.args.id ?? this.guid;
  }
}
