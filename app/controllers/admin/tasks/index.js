import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { taskStatuses, taskTypes } from 'meiliadmin/models/task';

export default class AdminTasksIndexController extends Controller {
  taskStatuses = taskStatuses;
  taskTypes = taskTypes;

  @tracked limit = 20;
  @tracked from;
  @tracked status;
  @tracked type;
  @tracked indexUid;

  queryParams = ['limit', 'from', 'status', 'type', 'indexUid'];
}
