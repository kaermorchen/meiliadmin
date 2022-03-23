import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminRoute extends Route {
  @service meilisearch;

  async model() {
    return this.meilisearch.getRawIndexes();
  }
}
