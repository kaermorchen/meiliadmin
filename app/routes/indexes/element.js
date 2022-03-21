import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexesElementRoute extends Route {
  @service store;

  async model({ index_id }) {
    return this.store.find('index', index_id);
  }
}
