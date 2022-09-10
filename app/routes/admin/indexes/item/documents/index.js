import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsIndexRoute extends Route {
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
    const options = { offset, limit };

    if (sort) {
      options.sort = [sort];
    }

    return hash({
      index,
      data: index.search(q, options),
      sortableAttributes: index.getSortableAttributes(),
      displayedAttributes: index.getSetting('displayed-attributes'),
      stats: index.getStats(),
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    if (
      model.displayedAttributes.length > 1 &&
      model.displayedAttributes[0] !== '*'
    ) {
      controller.attributes = model.displayedAttributes;
    } else {
      controller.attributes = Object.keys(model.stats.fieldDistribution);
    }
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.q = null;
      controller.page = 1;
    }

    window.scrollTo(0, 0);
  }
}
