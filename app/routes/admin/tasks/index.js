import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { TrackedObject } from 'tracked-built-ins';

export default class AdminTasksIndexRoute extends Route {
  @service meilisearch;

  queryParams = {
    limit: { refreshModel: true },
    statuses: { refreshModel: true },
    types: { refreshModel: true },
    indexUids: { refreshModel: true },
  };

  model() {
    return hash({
      indexes: this.meilisearch.getIndexes(),
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.tasksHolder = new TrackedObject({ results: [] });
  }
}
