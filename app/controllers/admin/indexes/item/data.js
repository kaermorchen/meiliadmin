import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminIndexesItemDataController extends Controller {
  @tracked q = null;
  @tracked limit = 20;
  @tracked page = 1;
  @tracked dataView = 'table';

  queryParams = ['q', 'page', 'limit'];

  get sortedFields() {
    const fields = Object.keys(this.model.stats.fieldDistribution);
    const primaryKey = this.model.index.primaryKey ?? 'id';
    const sortedArray = fields
      .filter((item) => item !== primaryKey)
      .sort((a, b) => {
        if (a > b || a.charAt(0) === '_') {
          return 1;
        }

        if (a < b) {
          return -1;
        }

        return 0;
      });

    return [primaryKey].concat(sortedArray);
  }

  @action
  searchTextChanged(value) {
    this.q = value === '' ? null : value;
  }
}
