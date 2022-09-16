import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { taskStatuses, taskTypes } from 'meiliadmin/models/task';
import { inject as service } from '@ember/service';
import { resource, use } from 'ember-resources';

export default class AdminTasksIndexController extends Controller {
  @service meilisearch;

  taskStatuses = taskStatuses;
  taskTypes = taskTypes;

  queryParams = ['limit', 'status', 'type', 'indexUid'];

  @tracked limit = 20;
  @tracked from;
  @tracked status;
  @tracked type;
  @tracked indexUid;

  @use
  tasks = resource(() => {
    this.tasksHolder.isLoading = true;

    const params = {
      limit: this.limit,
      from: this.from,
      status: this.status,
      type: this.type,
      indexUid: this.indexUid,
    };

    this.meilisearch.getTasks(params).then((data) => {
      this.tasksHolder.results = this.tasksHolder.results.concat(data.results);
      this.tasksHolder.next = data.next;
      this.tasksHolder.isLoading = false;
    });

    return this.tasksHolder;
  });
}
