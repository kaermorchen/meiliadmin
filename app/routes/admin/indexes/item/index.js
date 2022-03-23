import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemIndexRoute extends Route {
  @service router;

  beforeModel() {
    const item = this.modelFor('admin.indexes.item');

    this.router.transitionTo('admin.indexes.item.data', item);
  }
}
