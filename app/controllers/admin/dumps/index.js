import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminDumpsIndexController extends Controller {
  @service meilisearch;

  @action
  createDump() {
    return this.meilisearch.createDump();
  }
}
