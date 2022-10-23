import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { Magnify, Table, /* MapOutline, */ CodeJson } from 'ember-mdi';
import { inject as service } from '@ember/service';
import ActionInvoker from 'meiliadmin/lib/action-invoker';

export default class AdminIndexesItemDocumentsIndexController extends Controller {
  @service router;

  @tracked q = '';
  @tracked limit = 20;
  @tracked offset = 0;
  @tracked sort = null;
  @tracked attributesToRetrieve = [];

  @tracked hiddenFields = [];
  @tracked dataView = 'table';
  @tracked mode = 'simple';
  @tracked isAdvancedSearch = false;
  @tracked errors;

  queryParams = ['q', 'limit', 'offset', 'sort', 'attributesToRetrieve'];

  Magnify = Magnify;

  // key: view name, value: icon
  views = {
    table: Table,
    json: CodeJson,
  };

  modes = ['simple', 'advanced'];

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();
  }

  get searchObject() {
    return this.queryParams.reduce((properties, item) => {
      properties[item] = this[item];

      return properties;
    }, {});
  }

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
  goToPage(route, index, id) {
    this.router.transitionTo(route, index, id);
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

  @action
  search(value) {
    const obj = JSON.parse(value);

    this.queryParams.forEach((item) => {
      this[item] = obj[item];
    });
  }
}
