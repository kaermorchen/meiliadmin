import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ToastComponent extends Component {
  @service toasts;

  @tracked width;
  @tracked height;

  @action
  triggerOnClose() {
    this.args.onClose?.();
  }

  @action
  didInsert(el) {
    this.registerInQueue();
    this.registerResizeObserver(el);
  }

  registerResizeObserver(el) {
    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.width = entry.contentRect.width;
        this.height = entry.contentRect.height;
      }
    });

    ro.observe(el);

    registerDestructor(this, () => {
      ro.disconnect();
    });
  }

  registerInQueue() {
    this.toasts.add(this);

    registerDestructor(this, () => {
      this.toasts.remove(this);
    });
  }
}
