import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { EyeOutline, EyeOffOutline } from 'ember-mdi';

export default class FormTableSettingsComponent extends Component {
  checkedIcon = EyeOutline;
  uncheckedIcon = EyeOffOutline;

  get guid() {
    return guidFor(this);
  }

  get id() {
    return this.args.id ?? this.guid;
  }
}
