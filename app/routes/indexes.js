import Route from '@ember/routing/route';

export default class IndexesRoute extends Route {
  model() {
    return this.store.findAll('index');
  }
}
