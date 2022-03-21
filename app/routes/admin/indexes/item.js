import Route from '@ember/routing/route';

export default class AdminIndexesItemRoute extends Route {
  model({ index_id }) {
    return this.modelFor('admin.indexes').find((item) => item.id === index_id);
  }
}
