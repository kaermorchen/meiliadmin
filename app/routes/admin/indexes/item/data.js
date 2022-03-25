import Route from '@ember/routing/route';

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

    return this.modelFor('admin.indexes.item').search(q, { offset, limit });
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.q = null;
      controller.page = 1;
    }
  }
}
