import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDeleteController extends Controller {
  @service meilisearch;
  @service router;

  @action
  delete() {
    this.meilisearch.deleteIndex(this.model.uid);
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
