import query from '../utils/query';
// import { TrackedArray } from 'tracked-built-ins';
// import { trackedFunction } from 'ember-resources/util/function';
import Document from './document';
import { dasherize } from '@ember/string';

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
    return query(`${this.path}/documents`, {
      method: 'POST',
      body: JSON.stringify([JSON.parse(document)]),
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
    return query(`${this.path}/settings/${dasherize(name)}`, {
      method: 'PUT',
      body: JSON.stringify(value),
    });
  }

  resetSetting(name) {
    return query(`${this.path}/settings/${dasherize(name)}`, {
      method: 'DELETE',
    });
  }

  getDisplayedAttributes() {
    return query(`${this.path}/settings/displayed-attributes`);
  }

  updateDisplayedAttributes(value) {
    return query(`${this.path}/settings/displayed-attributes`, {
      method: 'PUT',
      body: JSON.stringify(value),
    });
  }

  resetDisplayedAttributes() {
    return query(`${this.path}/settings/displayed-attributes`, {
      method: 'DELETE',
    });
  }

  getDistinctAttribute() {
    return query(`${this.path}/settings/distinct-attribute`);
  }

  updateDistinctAttribute(value) {
    return query(`${this.path}/settings/distinct-attribute`, {
      method: 'PUT',
      body: JSON.stringify(value),
    });
  }

  resetDistinctAttribute() {
    return query(`${this.path}/settings/distinct-attribute`, {
      method: 'DELETE',
    });
  }

  // getSearchableAttributes() {
  //   return query(`${this.path}/settings/searchable-attributes`);
  // }

  // updateSearchableAttributes(value) {
  //   return query(`${this.path}/settings/searchable-attributes`, {
  //     method: 'POST',
  //     body: JSON.stringify(value),
  //   });
  // }

  // resetSearchableAttributes() {
  //   return query(`${this.path}/settings/searchable-attributes`, {
  //     method: 'DELETE',
  //   });
  // }

  // get fields() {
  //   return this.stats.value
  //     ? Object.keys(this.stats.value.fieldDistribution)
  //     : [];
  // }

  // getSettings() {
  //   return query(`${this.path}/settings`);
  // }

  // stats = trackedFunction(this, () => query(`${this.path}/stats`));
  // displayedAttributes = trackedFunction(this, () =>
  //   query(`${this.path}/settings/displayed-attributes`).then(
  //     (arr) => new TrackedArray(arr)
  //   )
  // );
}
