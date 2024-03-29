import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

const margin = 16;

export default class ToastComponent extends Component {
  @service toaster;

  @tracked width;
  @tracked height;

  get autoCloseDuration() {
    return this.args?.autoCloseDuration ?? 3000;
  }

  get top() {
    const queue = this.toaster.queue;

    for (let i = 0, height = 0; i < queue.length; i++) {
      height += margin;

      if (queue[i] === this) {
        return `top: ${height}px`;
      }

      height += queue[i].height;
    }

    return `top: ${margin}px`;
  }

  get right() {
    return `right: ${margin}px`;
  }

  get style() {
    return htmlSafe([this.top, this.right].join('; '));
  }

  @action
  invokeOnClose() {
    this.args.onClose?.();
  }

  @action
  didInsert(el) {
    this.registerInQueue();
    this.registerResizeObserver(el);
  }

  registerResizeObserver(el) {
    const ro = new ResizeObserver((entries) => {
      this.width = entries[0].borderBoxSize[0].inlineSize;
      this.height = entries[0].borderBoxSize[0].blockSize;
    });

    ro.observe(el);

    registerDestructor(this, () => {
      ro.disconnect();
    });
  }

  registerInQueue() {
    this.toaster.add(this);

    registerDestructor(this, () => {
      this.toaster.remove(this);
    });
  }
}
