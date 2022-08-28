import Route from '@ember/routing/route';

export default class AdminIndexesItemRoute extends Route {
  model({ uid }) {
    return this.modelFor('admin').find((item) => item.uid === uid);
  }
}
