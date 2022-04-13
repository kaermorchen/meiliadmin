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
    sort: {
      refreshModel: true,
    },
  };

  async model({ q, page, limit, sort }) {
    const offset = limit * --page;
    const index = this.modelFor('admin.indexes.item');
    const sortableAttributes = index.getSortableAttributes();
    const stats = index.getStats();
    const options = { offset, limit };

    if (sort) {
      options.sort = [sort];
    }

    return hash({
      data: index.search(q, options),
      index,
      sortableAttributes,
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
