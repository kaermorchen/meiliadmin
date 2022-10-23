import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { type } from 'meiliadmin/utils/json-schema';

const uri = 'https://docs.meilisearch.com/reference/api/search';
const searchSchema = {
  name: 'search',
  uri,
  fileMatch: [uri],
  schema: {
    $id: uri,
    type: 'object',
    properties: {
      q: type('string'),
      offset: type('integer'),
      limit: type('integer'),
      filter: {
        oneOf: [type('array').items('string'), type('null')],
      },
      facets: {
        oneOf: [type('array').items('string'), type('null')],
      },
      attributesToRetrieve: type('array').items('string'),
      attributesToCrop: {
        oneOf: [type('array').items('string'), type('null')],
      },
      cropLength: type('integer'),
      cropMarker: type('string'),
      attributesToHighlight: {
        oneOf: [type('array').items('string'), type('null')],
      },
      highlightPreTag: type('string'),
      highlightPostTag: type('string'),
      showMatchesPosition: type('boolean'),
      sort: {
        oneOf: [type('array').items('string'), type('null')],
      },
      matchingStrategy: { enum: ['last', 'all'] },
    },
    additionalProperties: false,
    required: ['q'],
  },
};

export default class AdminIndexesItemDocumentsIndexRoute extends Route {
  queryParams = {
    q: { refreshModel: true },
    limit: { refreshModel: true },
    offset: { refreshModel: true },
    sort: { refreshModel: true },
    attributesToRetrieve: { refreshModel: true },
  };

  async model(options) {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      searchSchema,
      data: index.search(options),
      sortableAttributes: index.getSortableAttributes(),
      displayedAttributes: index.getSetting('displayed-attributes'),
      stats: index.getStats(),
    });
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      // controller.q = '';
    }

    window.scrollTo(0, 0);
  }
}
