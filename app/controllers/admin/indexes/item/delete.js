import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDeleteController extends Controller {
  @service meilisearch;

  @action
  delete() {
    this.meilisearch.deleteIndex(this.model.uid);
  }
}
