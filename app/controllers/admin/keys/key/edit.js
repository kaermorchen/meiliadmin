import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ActionInvoker from 'meiliadmin/lib/action-invoker';

export default class AdminKeysKeyEditController extends Controller {
  @service router;
  @service toaster;

  @tracked errors;
  @tracked isSaving;

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();
  }

  @action
  async save(value) {
    const isNew = this.model.isNew;

    this.errors = [];
    this.isSaving = true;

    try {
      const key = await this.model.save(value);

      this.toaster.successToast({
        header: `The key has been ${isNew ? 'created' : 'updated'}`,
      });

      if (this.router.isActive('admin.keys.key')) {
        await this.router.refresh('admin.keys.key', key.uid);
      }

      await this.router.transitionTo('admin.keys.key.index', key.uid);
    } catch (error) {
      this.errors = [error.error || error];
    } finally {
      this.isSaving = false;
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
