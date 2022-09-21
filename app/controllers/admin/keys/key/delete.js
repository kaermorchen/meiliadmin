import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminKeysKeyDeleteController extends Controller {
  @service router;
  @service meilisearch;
  @service toaster;

  @action
  delete() {
    return this.meilisearch.deleteKey(this.model.uid).then(() => {
      this.toaster.successToast({ header: 'The key has been deleted' });

      return this.router.transitionTo('admin.keys');
    });
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
