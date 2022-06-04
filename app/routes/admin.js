import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminRoute extends Route {
  @service meilisearch;

  async model() {
    return hash({
      indexes: this.meilisearch.getIndexes(),
      health: this.meilisearch.getHealth(),
    });
  }
}
