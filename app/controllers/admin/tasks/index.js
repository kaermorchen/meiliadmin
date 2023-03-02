import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { taskStatuses, taskTypes } from 'meiliadmin/models/task';
import { inject as service } from '@ember/service';
import { resource, use } from 'ember-resources';

export default class AdminTasksIndexController extends Controller {
  @service meilisearch;

  taskStatuses = taskStatuses;
  taskTypes = taskTypes;

  queryParams = ['limit', 'statuses', 'types', 'indexUids'];

  @tracked limit = 20;
  @tracked from;
  @tracked statuses;
  @tracked types;
  @tracked indexUids;

  @use
  tasks = resource(() => {
    this.tasksHolder.isLoading = true;

    const params = {
      limit: this.limit,
      from: this.from,
      statuses: this.statuses,
      types: this.types,
      indexUids: this.indexUids,
    };

    this.meilisearch.getTasks(params).then((data) => {
      this.tasksHolder.results = this.tasksHolder.results.concat(data.results);
      this.tasksHolder.next = data.next;
      this.tasksHolder.isLoading = false;
    });

    return this.tasksHolder;
  });
}
