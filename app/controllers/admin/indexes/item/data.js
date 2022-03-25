import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { trackedFunction } from 'ember-resources';

export default class AdminIndexesItemDataController extends Controller {
  @tracked searchText = 'hello';
  @tracked offset = 0;
  @tracked page = 0;

  request = trackedFunction(this, async () => {
    if (typeof this.searchText !== 'string' || this.searchText.length < 1) {
      return null;
    }

    const response = await this.model.search(this.searchText);

    return response;
  });

  get data() {
    return this.request.value;
  }

  @action
  searchTextChanged(value) {
    this.searchText = value;
  }
}
