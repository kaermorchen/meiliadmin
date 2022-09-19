import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDeleteController extends Controller {
  @service meilisearch;
  @service router;
  @service toaster;

  @action
  delete() {
    return this.meilisearch
      .deleteIndex(this.model.uid)
      .then(this.toaster.taskToast);
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
