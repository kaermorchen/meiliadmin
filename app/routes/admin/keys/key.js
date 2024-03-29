import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminKeysKeyRoute extends Route {
  @service meilisearch;

  model({ uid }) {
    return this.meilisearch.getKey(uid);
  }
}
