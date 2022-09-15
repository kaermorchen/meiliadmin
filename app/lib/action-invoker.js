import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';

export default class ActionInvoker {
  constructor() {
    this.contexts = new Set();
  }

  @action
  invoke(action, ...args) {
    this.contexts.forEach((item) => {
      item[action]?.(...args);
    });
  }

  @action
  subscribe(context) {
    this.contexts = this.contexts.add(context);

    registerDestructor(context, () => {
      this.contexts.delete(context);
    });
  }
}
