import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminIndexesItemDataController extends Controller {
  @tracked q = null;
  @tracked limit = 20;
  @tracked page = 1;

  queryParams = ['q', 'page', 'limit'];

  @action
  searchTextChanged(value) {
    this.q = value === '' ? null : value;
  }
}
