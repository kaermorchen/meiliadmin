import Component from '@glimmer/component';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Loading, Check, AlertOctagonOutline } from 'ember-mdi';

export default class TaskToastComponent extends Component {
  @service meilisearch;

  @tracked task;

  constructor(owner, args) {
    super(owner, args);

    this.interval = setInterval(this.reloadTask, 1000);

    registerDestructor(this, this.clearInterval);
  }

  get icon() {
    switch (this.taskStatus) {
      case 'enqueued':
        return Loading;
      case 'succeeded':
        return Check;
      case 'failed':
        return AlertOctagonOutline;
      default:
        return null;
    }
  }

  get color() {
    switch (this.taskStatus) {
      case 'enqueued':
        return 'text-info';
      case 'succeeded':
        return 'text-success';
      case 'failed':
        return 'text-danger';
      default:
        return null;
    }
  }

  get isEnqueued() {
    return this.taskStatus === 'enqueued';
  }

  get isFailed() {
    return this.taskStatus === 'failed';
  }

  get isSucceeded() {
    return this.taskStatus === 'succeeded';
  }

  get taskUid() {
    return this.task?.taskUid ?? this.args.task.taskUid;
  }

  get taskType() {
    return this.task?.type ?? this.args.task.type;
  }

  get taskStatus() {
    return this.task?.status ?? this.args.task.status;
  }

  @action
  reloadTask() {
    this.meilisearch.getTask(this.taskUid).then((task) => {
      this.task = task;
    });
  }

  @action
  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
