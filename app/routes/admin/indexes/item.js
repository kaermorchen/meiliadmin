import Route from '@ember/routing/route';

export default class AdminIndexesItemRoute extends Route {
  model({ uid }) {
    return this.modelFor('admin').indexes.find((item) => item.uid === uid);
  }
}
