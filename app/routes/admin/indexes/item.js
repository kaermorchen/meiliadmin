import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemRoute extends Route {
  @service meilisearch;

  model({ index_uid }) {
    return this.meilisearch.getIndex(index_uid);
  }
}
