import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemSettingsRoute extends Route {
  @service meilisearch;

  async model() {
    const item = this.modelFor('admin.indexes.item');

    return this.meilisearch.index(item);
  }
}
