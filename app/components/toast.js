import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';

export default class ToastComponent extends Component {
  @service toasts;

  constructor(owner, args) {
    super(owner, args);

    // registerDestructor(this, this.destroy);
  }

  @action
  destroyFromPlate() {
    this.args?.willDestroy();
  }
}
