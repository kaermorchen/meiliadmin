import { dasherize } from '@ember/string';
import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js';

const urlSettingsPrefix = 'https://docs.meilisearch.com/reference/api/settings';

export const indexSettings = [
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
    name: 'stopWords',
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      uniqueItems: true,
    },
  },
].map((item) => {
  item.uri = item.schema.$id = `${urlSettingsPrefix}/${dasherize(item.name)}`;
  item.fileMatch = [item.uri];

  return item;
});

export const allIndexSettings = {
  name: '',
  uri: urlSettingsPrefix,
  fileMatch: [urlSettingsPrefix],
  schema: {
    $id: urlSettingsPrefix,
    type: 'object',
    properties: indexSettings.reduce((properties, item) => {
      properties[item.name] = {
        $ref: item.schema.$id,
      };

      return properties;
    }, {}),
    additionalProperties: false,
  },
};

// TODO: do it async, not in main stream
languages.json.jsonDefaults.setDiagnosticsOptions({
  validate: true,
  schemas: [...indexSettings, allIndexSettings],
});
