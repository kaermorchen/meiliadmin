import query from '../utils/query';

export default class Key {
  actions = ['*'];
  indexes = ['*'];
  expiresAt = null;
  name = '';
  description = '';

  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get path() {
    return `keys/${this.uid}`;
  }

  get isNew() {
    return Boolean(!this.uid);
  }

  get editablePayload() {
    let keys = ['name', 'description'];

    if (this.isNew) {
      keys = keys.concat(['actions', 'indexes', 'expiresAt', 'uid']);
    }

    return Object.fromEntries(
      Object.entries(this).filter(([key]) => keys.includes(key))
    );
  }

  get setting() {
    const uri = 'https://docs.meilisearch.com/reference/api/keys';
    const required = this.isNew ? ['actions', 'indexes', 'expiresAt'] : [];

    return {
      uri: uri,
      fileMatch: [uri],
      schema: {
        $id: uri,
        type: 'object',
        additionalProperties: false,
        properties: {
          actions: {
            type: 'array',
            // enum: [
            //   '*',
            //   'search',

            //   'documents.*',
            //   'documents.add',
            //   'documents.get',
            //   'documents.delete',

            //   'indexes.*',
            //   'indexes.create',
            //   'indexes.get',
            //   'indexes.update',
            //   'indexes.delete',

            //   'tasks.*',
            //   'tasks.get',

            //   'settings.*',
            //   'settings.get',
            //   'settings.update',

            //   'stats.*',
            //   'stats.get',

            //   'dumps.*',
            //   'dumps.create',

            //   'version',

            //   'keys.*',
            //   'keys.get',
            //   'keys.create',
            //   'keys.update',
            //   'keys.delete',
            // ],
            items: {
              type: 'string',
            },
            uniqueItems: true,
            minItems: 1,
          },
          indexes: {
            oneOf: [
              { type: 'array', enum: ['*'] },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
                uniqueItems: true,
                minItems: 1,
              },
            ],
          },
          expiresAt: {
            type: ['null', 'date-time'],
          },
          name: {
            type: ['null', 'string'],
          },
          description: {
            type: ['null', 'string'],
          },
        },
        required,
      },
    };
  }

  save(data) {
    const path = this.isNew ? 'keys' : this.path;
    const method = this.isNew ? 'POST' : 'PATCH';

    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    return query(path, {
      method: method,
      body: data,
    });
  }
}
