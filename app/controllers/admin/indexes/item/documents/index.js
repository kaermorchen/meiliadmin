import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { Magnify, Table, MapOutline } from 'ember-mdi';

export default class AdminIndexesItemDocumentsIndexController extends Controller {
  @tracked q = null;
  @tracked limit = 20;
  @tracked page = 1;
  @tracked dataView = 'table';
  @tracked sort;
  @tracked hiddenFields = [];
  @tracked attributesToRetrieve = [];

  queryParams = ['q', 'page', 'limit', 'sort'];

  Magnify = Magnify;

  // key: view name, value: icon
  views = {
    table: Table,
    map: MapOutline,
  };

  get attributes() {
    if (this.attributesToRetrieve.length > 0) {
      return this.attributesToRetrieve;
    } else {
      return this.originalAttributes;
    }
  }

  get originalAttributes() {
    if (
      this.model.displayedAttributes.length > 0 &&
      this.model.displayedAttributes[0] !== '*'
    ) {
      return this.model.displayedAttributes;
    } else {
      return Object.keys(this.model.stats.fieldDistribution);
    }
  }

  get allAttributes() {
    return this.attributes.concat(
      this.originalAttributes.filter((item) => !this.attributes.includes(item))
    );
  }

  get fromHits() {
    return 1 + this.model.data.offset;
  }

  get toHits() {
    return this.model.data.offset + this.model.data.hits.length;
  }

  get sortValues() {
    const result = [];

    this.model.sortableAttributes.forEach((item) => {
      result.push(`${item}:asc`, `${item}:desc`);
    });

    return result;
  }

  @action
  toggleAttribute(name) {
    if (this.attributes.includes(name)) {
      this.attributesToRetrieve = this.attributes.filter(
        (item) => item !== name
      );
    } else {
      this.attributesToRetrieve = this.attributes.concat([name]);
    }
  }

  @action
  searchTextChanged(value) {
    this.q = value === '' ? null : value;
  }

  @action
  onSort(newSort) {
    if (`${newSort}:desc` === this.sort) {
      this.sort = null;
    } else if (`${newSort}:asc` === this.sort) {
      this.sort = `${newSort}:desc`;
    } else {
      this.sort = `${newSort}:asc`;
    }
  }

  @action
  isItemChecked(item) {
    return this.attributes.includes(item);
  }

  @action
  sortAttibutes(items) {
    this.attributesToRetrieve = items.filter(this.isItemChecked);
  }
}
