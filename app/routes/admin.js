import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminRoute extends Route {
  @service meilisearch;
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    return hash({
      indexes: this.meilisearch.getIndexes(),
      health: this.meilisearch.getHealth(),
      version: this.meilisearch.getVersion(),
    });
  }
}
