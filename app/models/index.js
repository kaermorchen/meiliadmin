import query from '../utils/query';
import Document from './document';
import { dasherize } from '@ember/string';

export default class Index {
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get settingNames() {
    return [
      'displayedAttributes',
      'distinctAttribute',
      'faceting',
      'filterableAttributes',
      'pagination',
      'rankingRules',
      'searchableAttributes',
      'sortableAttributes',
      'stopWords',
      'synonyms',
      'typoTolerance',
    ];
  }

  get path() {
    return `indexes/${this.uid}`;
  }

  get isNew() {
    return Boolean(!this.uid);
  }

  getSortableAttributes() {
    return query(`${this.path}/settings/sortable-attributes`);
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

  deleteDocument(document) {
    const document_id = document[this.primaryKey];

    return query(`${this.path}/documents/${document_id}`, {
      method: 'DELETE',
    });
  }

  search(q, options = {}) {
    options.q = q;

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
    return query(`${this.path}/settings/${dasherize(name)}`);
  }

  updateSetting(name, value) {
    const method = ['faceting', 'pagination', 'typo-tolerance'].includes(name)
      ? 'PATCH'
      : 'PUT';

    return query(`${this.path}/settings/${dasherize(name)}`, {
      method: method,
      body: JSON.stringify(value),
    });
  }

  resetSetting(name) {
    return query(`${this.path}/settings/${dasherize(name)}`, {
      method: 'DELETE',
    });
  }
}
