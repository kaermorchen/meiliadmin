import Route from '@ember/routing/route';
import { hash } from 'rsvp';

const uri = 'https://docs.meilisearch.com/reference/api/search';
const searchSchema = {
  name: 'search',
  uri,
  fileMatch: [uri],
  schema: {
    $id: uri,
    type: 'object',
    properties: {
      q: {
        type: 'string',
      },
      // minWordSizeForTypos: {
      //   type: 'object',
      //   properties: {
      //     oneTypo: { type: 'integer' },
      //     twoTypos: { type: 'integer' },
      //   },
      //   additionalProperties: false,
      // },
      // disableOnWords: {
      //   type: 'array',
      //   items: {
      //     type: 'string',
      //   },
      //   uniqueItems: true,
      // },
      // disableOnAttributes: {
      //   type: 'array',
      //   items: {
      //     type: 'string',
      //   },
      //   uniqueItems: true,
      // },
    },
    additionalProperties: false,
    required: ['q'],
  },
};

export default class AdminIndexesItemDocumentsIndexRoute extends Route {
  queryParams = {
    q: { refreshModel: true },
    limit: { refreshModel: true },
    page: { refreshModel: true },
    sort: { refreshModel: true },
    attributesToRetrieve: { refreshModel: true },
  };

  async model({ q, page, limit, sort, attributesToRetrieve }) {
    const offset = limit * --page;
    const index = this.modelFor('admin.indexes.item');
    const options = { offset, limit };

    if (sort) {
      options.sort = [sort];
    }

    if (attributesToRetrieve.length > 0) {
      options.attributesToRetrieve = attributesToRetrieve;
    }

    return hash({
      index,
      searchSchema,
      search: { q: '' },
      data: index.search(q, options),
      sortableAttributes: index.getSortableAttributes(),
      displayedAttributes: index.getSetting('displayed-attributes'),
      stats: index.getStats(),
    });
  }

  // setupController(controller, model) {
  //   super.setupController(controller, model);

  // if (controller.attributesToRetrieve.length === 0) {
  //   if (
  //     model.displayedAttributes.length > 1 &&
  //     model.displayedAttributes[0] !== '*'
  //   ) {
  //     controller.attributes = model.displayedAttributes;
  //   } else {
  //     controller.attributes = Object.keys(model.stats.fieldDistribution);
  //   }
  // }
  // }

  resetController(controller, isExiting) {
    // console.log('resetController', isExiting);
    if (isExiting) {
      controller.q = null;
      controller.page = 1;
      // controller.attributes = [];
    }

    window.scrollTo(0, 0);
  }
}
