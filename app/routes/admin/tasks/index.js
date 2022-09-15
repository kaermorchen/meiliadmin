import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminTasksIndexRoute extends Route {
  @service meilisearch;

  queryParams = {
    limit: { refreshModel: true },
    from: { refreshModel: true },
    status: { refreshModel: true },
    type: { refreshModel: true },
    indexUid: { refreshModel: true },
  };

  model(params) {
    return hash({
      tasks: this.meilisearch.getTasks(params),
      indexes: this.meilisearch.getIndexes(),
    });
  }
}
