import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';

export default class ToastComponent extends Component {
  @service toasts;

  @action
  triggerOnClose() {
    this.args.onClose?.();
  }

  @action
  registerInPlate() {
    this.toasts.add(this);

    registerDestructor(this, () => {
      this.toasts.remove(this);
    });
  }
}
