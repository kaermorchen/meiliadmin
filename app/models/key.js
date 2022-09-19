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
