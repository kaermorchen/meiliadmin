import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Toast from '../components/toast';
import { hbs } from 'ember-template-imports';
import { fn } from '@ember/helper';

export default class ToastsService extends Service {
  @tracked container = [];
  @tracked plate = [];

  constructor() {
    super();

    this.destinationElement = document.createElement('div');

    document.body.appendChild(this.destinationElement);
  }

  successToast({ text }) {
    const onClose = () => {
      this.container = this.container.filter((item) => item !== wrapper);
    };

    const wrapper = hbs`<Toast @text={{text}} @onClose={{onClose}} />`;

    this.container = this.container.concat([wrapper]);
  }

  add(toast) {
    this.queue = this.queue.concat(toast);
  }

  remove(toast) {
    this.queue = this.queue.filter((item) => item !== toast);
  }
}
