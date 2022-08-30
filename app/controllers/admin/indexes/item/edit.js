import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemEditController extends Controller {
  @action
  save(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    this.model.save(data);
  }
}
