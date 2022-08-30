import Route from '@ember/routing/route';

export default class AdminIndexesItemEditRoute extends Route {
  async model() {
    return this.modelFor('admin.indexes.item');
  }
}
