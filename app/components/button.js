import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ButtonComponent extends Component {
  @tracked _state = 'default';

  get isActive() {
    return (
      this.args.group &&
      this.args.value &&
      this.args.group.args.value === this.args.value
    );
  }

  get disabled() {
    if (this.args.disabled !== undefined) {
      return this.args.disabled;
    }

    return this.isPending;
  }

  get type() {
    return this.args.type ?? 'button';
  }

  get icon() {
    if (this.isPending && this.args.pendingIcon) {
      return this.args.pendingIcon;
    } else if (this.isFulfilled && this.args.fulfilledIcon) {
      return this.args.fulfilledIcon;
    } else if (this.isRejected && this.args.rejectedIcon) {
      return this.args.rejectedIcon;
    } else if (this.isSettled && this.args.settledIcon) {
      return this.args.settledIcon;
    }

    return this.args.icon ?? null;
  }

  get state() {
    return this.args.state ?? this._state;
  }
  set state(state) {
    this._state = state;
  }

  get isPending() {
    return this.state === 'pending';
  }

  get isFulfilled() {
    return this.state === 'fulfilled';
  }

  get isRejected() {
    return this.state === 'rejected';
  }

  get isSettled() {
    return this.isFulfilled || this.isRejected;
  }

  get text() {
    return this.args[`${this.state}Text`] || this.args.text;
  }

  @action
  async handleClick() {
    if (typeof this.args.onClick !== 'function') {
      return;
    }

    this.state = 'pending';

    try {
      await this.args.onClick(this.args.value);

      if (!this.isDestroyed) {
        this.state = 'fulfilled';
      }
    } catch (error) {
      if (!this.isDestroyed) {
        this.state = 'rejected';
      }

      throw error;
    }
  }
}
