import Component from '@glimmer/component';
import { action } from '@ember/object';
import { CheckboxOutline, CheckboxBlankOutline } from 'ember-mdi';

export default class FormCheckboxComponent extends Component {
  get checkedIcon() {
    return this.args.checkedIcon ?? CheckboxOutline;
  }

  get uncheckedIcon() {
    return this.args.uncheckedIcon ?? CheckboxBlankOutline;
  }

  @action
  onChange() {
    if (this.args.onChange) {
      this.args.onChange(!this.args.checked);
    }
  }
}
