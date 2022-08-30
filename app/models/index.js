import query from '../utils/query';
// import { TrackedArray } from 'tracked-built-ins';
// import { trackedFunction } from 'ember-resources/util/function';

export default class Index {
  // stats = trackedFunction(this, () => query(`${this.indexPath}/stats`));
  // displayedAttributes = trackedFunction(this, () =>
  //   query(`${this.indexPath}/settings/displayed-attributes`).then(
  //     (arr) => new TrackedArray(arr)
  //   )
  // );

  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get indexPath() {
    return `indexes/${this.uid}`;
  }

  get isNew() {
    return Boolean(!this.uid);
  }

  // get allAttributesAreDisplayed() {
  //   return (
  //     this.displayedAttributes.value &&
  //     this.displayedAttributes.value.length === 1 &&
  //     this.displayedAttributes.value[0] === '*'
  //   );
  // }

  // getDisplayedAttributes() {
  //   return query(`${this.indexPath}/settings/displayed-attributes`);
  // }

  // updateDisplayedAttributes(value) {
  //   return query(`${this.indexPath}/settings/displayed-attributes`, {
  //     method: 'POST',
  //     body: JSON.stringify(value),
  //   });
  // }

  // resetDisplayedAttributes() {
  //   return query(`${this.indexPath}/settings/displayed-attributes`, {
  //     method: 'DELETE',
  //   });
  // }

  // getSearchableAttributes() {
  //   return query(`${this.indexPath}/settings/searchable-attributes`);
  // }

  // updateSearchableAttributes(value) {
  //   return query(`${this.indexPath}/settings/searchable-attributes`, {
  //     method: 'POST',
  //     body: JSON.stringify(value),
  //   });
  // }

  // resetSearchableAttributes() {
  //   return query(`${this.indexPath}/settings/searchable-attributes`, {
  //     method: 'DELETE',
  //   });
  // }

  getSortableAttributes() {
    return query(`${this.indexPath}/settings/sortable-attributes`);
  }

  getStats() {
    return query(`${this.indexPath}/stats`);
  }

  // getSettings() {
  //   return query(`${this.indexPath}/settings`);
  // }

  search(q, options = {}) {
    options.q = q;

    return query(`${this.indexPath}/search`, {
      method: 'POST',
      body: JSON.stringify(options),
    });
  }

  // get fields() {
  //   return this.stats.value
  //     ? Object.keys(this.stats.value.fieldDistribution)
  //     : [];
  // }

  save(data) {
    const path = this.isNew ? 'indexes' : this.indexPath;
    const method = this.isNew ? 'POST' : 'PATCH';

    return query(path, {
      method: method,
      body: JSON.stringify(data),
    });
  }
}
