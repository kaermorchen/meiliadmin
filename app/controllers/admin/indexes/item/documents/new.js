import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ActionInvoker from 'meiliadmin/lib/action-invoker';

export default class AdminIndexesItemDocumentsNewController extends Controller {
  @service router;
  @service toaster;

  @tracked errors = [];
  @tracked isSaving;

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();
  }

  @action
  async save(value) {
    this.errors = [];

    this.isSaving = true;

    try {
      const task = await this.model.index.saveDocuments(JSON.parse(value));

      this.isSaving = false;

      this.toaster.taskToast(task);
    } catch (error) {
      this.errors = [error.error || error];
    }
  }

  @action
  cancel() {
    const newRouteName = this.router.currentRouteName.replace(
      /\.(new|edit|delete)$/,
      ''
    );
    this.router.transitionTo(newRouteName);
  }
}
