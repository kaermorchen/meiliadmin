import query from '../utils/query';
import Document from './document';
import { dasherize } from '@ember/string';

const uri = 'https://docs.meilisearch.com/reference/api/document';

export default class Index {
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get path() {
    return `indexes/${this.uid}`;
  }

  get isNew() {
    return Boolean(!this.uid);
  }

  get documentSetting() {
    return {
      uri,
      fileMatch: [uri],
      schema: this.schema,
    };
  }

  get schema() {
    return {
      $id: uri,
      type: 'object',
      required: [this.primaryKey],
    };
  }

  getStats() {
    return query(`${this.path}/stats`);
  }

  getDocument(uid) {
    return query(`${this.path}/documents/${uid}`).then(
      (result) => new Document(result)
    );
  }

  saveDocument(document) {
    if (typeof document === 'string') {
      document = JSON.parse(document);
    }

    return query(`${this.path}/documents`, {
      method: 'POST',
      body: JSON.stringify([document]),
    });
  }

  saveDocuments(body) {
    return query(`${this.path}/documents`, { method: 'POST', body });
  }

  deleteDocument(document) {
    const document_id = document[this.primaryKey];

    return query(`${this.path}/documents/${document_id}`, {
      method: 'DELETE',
    });
  }

  search(options) {
    return query(`${this.path}/search`, {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }

  save(data) {
    const path = this.isNew ? 'indexes' : this.path;
    const method = this.isNew ? 'POST' : 'PATCH';

    return query(path, {
      method: method,
      body: JSON.stringify(data),
    });
  }

  getSetting(name) {
    let url = `${this.path}/settings`;

    if (name) {
      url = `${url}/${dasherize(name)}`;
    }

    return query(url);
  }

  updateSetting(value, name) {
    const method =
      name === undefined ||
      ['faceting', 'pagination', 'typo-tolerance'].includes(name)
        ? 'PATCH'
        : 'PUT';

    let url = `${this.path}/settings`;

    if (name) {
      url = `${url}/${dasherize(name)}`;
    }

    return query(url, {
      method: method,
      body: JSON.stringify(value),
    });
  }

  resetSetting(name) {
    let url = `${this.path}/settings`;

    if (name) {
      url = `${url}/${dasherize(name)}`;
    }

    return query(url, {
      method: 'DELETE',
    });
  }
}
