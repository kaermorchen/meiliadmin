import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemInfoRoute extends Route {
  async model() {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      stats: index.getStats(),
    });
  }
}
