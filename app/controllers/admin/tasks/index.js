import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminTasksIndexController extends Controller {
  @tracked limit = 20;
  @tracked from;
  @tracked status;
  @tracked type;
  @tracked indexUid;

  queryParams = ['limit', 'from', 'status', 'type', 'indexUid'];
}
