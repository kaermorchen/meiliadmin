import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';
import { action } from '@ember/object';
import SuccessToast from '../components/toast/success';
import DangerToast from '../components/toast/danger';
import TaskToast from '../components/toast/task';

export default class ToasterService extends Service {
  @tracked container = [];
  @tracked queue = [];

  constructor() {
    super();

    this.destinationElement = document.createElement('div');

    document.body.appendChild(this.destinationElement);
  }

  @action
  successToast({ text, header }) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs(
      `<SuccessToast @header={{header}} @text={{text}} @onClose={{onClose}} />`,
      {
        strictMode: true,
        scope: () => ({ SuccessToast, header, text, onClose }),
      }
    );

    this.container = this.container.concat([wrapper]);
  }

  @action
  dangerToast({ text, header }) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs(
      `<DangerToast @header={{header}} @text={{text}} @onClose={{onClose}} />`,
      {
        strictMode: true,
        scope: () => ({ DangerToast, header, text, onClose }),
      }
    );

    this.container = this.container.concat([wrapper]);
  }

  @action
  taskToast(task) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs(`<TaskToast @task={{task}} @onClose={{onClose}} />`, {
      strictMode: true,
      scope: () => ({ TaskToast, task, onClose }),
    });

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
