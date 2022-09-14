import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemEditController extends Controller {
  @service router;
  @service toasts;

  @action
  async save(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const task = await this.model.save(data);

    this.toasts.taskToast(task);
  }

  @action
  cancel() {
    const newRouteName = this.router.currentRouteName.replace(
      /\.(new|edit)$/,
      ''
    );
    this.router.transitionTo(newRouteName);
  }
}
