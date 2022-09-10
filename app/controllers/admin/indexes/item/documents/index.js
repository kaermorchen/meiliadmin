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

  queryParams = ['q', 'page', 'limit', 'sort'];

  Magnify = Magnify;

  // key: view name, value: icon
  views = {
    table: Table,
    map: MapOutline,
  };

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

  // get sortedFields() {
  //   const fields = Object.keys(this.model.stats.fieldDistribution);
  //   const primaryKey = this.model.index.primaryKey ?? 'id';
  //   const sortedArray = fields
  //     .filter((item) => item !== primaryKey)
  //     .sort((a, b) => {
  //       if (a > b || a.charAt(0) === '_') {
  //         return 1;
  //       }

  //       if (a < b) {
  //         return -1;
  //       }

  //       return 0;
  //     });

  //   return [primaryKey].concat(sortedArray);
  // }

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
}
