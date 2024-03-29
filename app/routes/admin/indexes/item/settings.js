import Route from '@ember/routing/route';
import { dasherize } from '@ember/string';

const urlSettingsPrefix = 'https://docs.meilisearch.com/reference/api/settings';
const settings = [
  {
    name: 'displayedAttributes',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'distinctAttribute',
    schema: {
      type: ['string', 'null'],
    },
  },
  {
    name: 'faceting',
    schema: {
      type: 'object',
      properties: {
        maxValuesPerFacet: {
          type: 'integer',
        },
      },
      required: ['maxValuesPerFacet'],
      additionalProperties: false,
    },
  },
  {
    name: 'filterableAttributes',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'pagination',
    schema: {
      type: 'object',
      properties: {
        maxTotalHits: {
          type: 'integer',
        },
      },
      required: ['maxTotalHits'],
      additionalProperties: false,
    },
  },
  {
    name: 'rankingRules',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'searchableAttributes',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'sortableAttributes',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'stopWords',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
  {
    name: 'synonyms',
    schema: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'string',
        },
        uniqueItems: true,
      },
    },
  },
  {
    name: 'typoTolerance',
    schema: {
      type: 'object',
      properties: {
        enabled: {
          type: 'boolean',
        },
        minWordSizeForTypos: {
          type: 'object',
          properties: {
            oneTypo: { type: 'integer' },
            twoTypos: { type: 'integer' },
          },
          additionalProperties: false,
        },
        disableOnWords: {
          type: 'array',
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
        disableOnAttributes: {
          type: 'array',
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
      },
      additionalProperties: false,
    },
  },
];

// All settings
settings.unshift({
  schema: {
    type: 'object',
    properties: settings.reduce((properties, item) => {
      properties[item.name] = item.schema;

      return properties;
    }, {}),
    additionalProperties: false,
  },
});

settings.forEach((item) => {
  let uri = urlSettingsPrefix;

  if (item.name) {
    uri += `/${dasherize(item.name)}`;
  }

  item.uri = item.schema.$id = uri;
  item.fileMatch = [uri];

  return item;
});

export default class AdminIndexesItemSettingsRoute extends Route {
  model() {
    const index = this.modelFor('admin.indexes.item');

    return { index, settings, currentSetting: settings[0] };
  }
}
