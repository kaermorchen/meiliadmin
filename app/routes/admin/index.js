import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminIndexRoute extends Route {
  @service meilisearch;
  @service session;

  async model() {
    return hash({
      indexes: this.meilisearch.getIndexes(),
      health: this.meilisearch.getHealth(),
      version: this.meilisearch.getVersion(),
      stats: this.meilisearch.getStats(),
    });
  }
}
