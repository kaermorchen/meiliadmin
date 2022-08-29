import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminKeysRoute extends Route {
  @service meilisearch;

  model() {
    return this.meilisearch.getKeys();
  }
}
