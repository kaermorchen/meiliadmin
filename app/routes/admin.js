import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminRoute extends Route {
  @service session;
  @service meilisearch;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  model() {
    return hash({
      indexes: this.meilisearch.getIndexes(),
      health: this.meilisearch.getHealth(),
      version: this.meilisearch.getVersion(),
      stats: this.meilisearch.getStats(),
    });
  }
}
