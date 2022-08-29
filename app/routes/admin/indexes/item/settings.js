import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemSettingsRoute extends Route {
  async model() {
    // const index = this.modelFor('admin.indexes.item');
    // const stats = index.stats;

    return hash({
      // index,
      // stats,
      // displayedAttributes: index.getDisplayedAttributes(),
      // searchableAttributes: index.getSearchableAttributes(),
    });
  }
}
