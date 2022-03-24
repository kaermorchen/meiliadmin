import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminIndexesItemDataController extends Controller {
  @tracked searchText;

  @action
  searchTextChanged(value) {
    this.searchText = value;
  }
}
