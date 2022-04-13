import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDataRoute extends Route {
  queryParams = {
    q: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  };

  async model({ q, page, limit }) {
    const offset = limit * --page;
    const index = this.modelFor('admin.indexes.item');
    const stats = index.getStats();

    return hash({
      data: index.search(q, { offset, limit }),
      index,
      stats,
    });
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.q = null;
      controller.page = 1;
    }

    window.scrollTo(0, 0);
  }
}
