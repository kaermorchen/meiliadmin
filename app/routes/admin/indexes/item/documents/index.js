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
    offset: { refreshModel: true },
    limit: { refreshModel: true },
    filter: { refreshModel: true },
    facets: { refreshModel: true },
    attributesToRetrieve: { refreshModel: true },
    attributesToCrop: { refreshModel: true },
    cropLength: { refreshModel: true },
    cropMarker: { refreshModel: true },
    attributesToHighlight: { refreshModel: true },
    highlightPreTag: { refreshModel: true },
    highlightPostTag: { refreshModel: true },
    showMatchesPosition: { refreshModel: true },
    sort: { refreshModel: true },
    matchingStrategy: { refreshModel: true },
  };

  async model(options) {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      searchSchema,
      data: index.search(options),
      sortableAttributes: index.getSetting('sortable-attributes'),
      displayedAttributes: index.getSetting('displayed-attributes'),
      stats: index.getStats(),
    });
  }

  resetController() {
    window.scrollTo(0, 0);
  }
}
