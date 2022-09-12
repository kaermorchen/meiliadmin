import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ToastsService extends Service {
  @tracked plate = [];

  constructor() {
    super();

    this.destinationElement = document.createElement('div');

    document.body.appendChild(this.destinationElement);
  }

  add() {

  }
}
