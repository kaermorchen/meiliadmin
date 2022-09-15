import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';
import { action } from '@ember/object';
import SuccessToast from '../components/success-toast';
import TaskToast from '../components/task-toast';

export default class ToastsService extends Service {
  @tracked container = [];
  @tracked queue = [];

  constructor() {
    super();

    this.destinationElement = document.createElement('div');

    document.body.appendChild(this.destinationElement);
  }

  @action
  successToast({ text }) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs`<SuccessToast @text={{text}} @onClose={{onClose}} />`;

    this.container = this.container.concat([wrapper]);
  }

  @action
  taskToast(task) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs`<TaskToast @task={{task}} @onClose={{onClose}} />`;

    this.container = this.container.concat([wrapper]);
  }

  @action
  add(toast) {
    this.queue = this.queue.concat(toast);
  }

  @action
  remove(toast) {
    this.queue = this.queue.filter((item) => item !== toast);
  }
}
