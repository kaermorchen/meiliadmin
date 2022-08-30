import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminTasksIndexRoute extends Route {
  @service meilisearch;

  model() {
    return this.meilisearch.getTasks();
  }
}
