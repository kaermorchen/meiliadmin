import Component from '@glimmer/component';
import { registerDestructor } from '@ember/destroyable';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Loading, Check, AlertOctagonOutline } from 'ember-mdi';
import Task from 'meiliadmin/models/task';

// TODO: refactor for using more inside Task logic
export default class ToastTaskComponent extends Component {
  @service meilisearch;

  @tracked task;
  @tracked autoClose;

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

  get status() {
    if (this.isEnqueued) {
      return 'info';
    } else if (this.isFailed) {
      return 'danger';
    } else if (this.isSucceeded) {
      return 'success';
    } else {
      return null;
    }
  }

  get color() {
    // Current classes need for taiwind builder
    if (this.isEnqueued) {
      return 'text-info';
    } else if (this.isFailed) {
      return 'text-danger';
    } else if (this.isSucceeded) {
      return 'text-success';
    } else {
      return null;
    }
  }

  get bg() {
    // Current classes need for taiwind builder
    if (this.isEnqueued) {
      return 'bg-info';
    } else if (this.isFailed) {
      return 'bg-danger';
    } else if (this.isSucceeded) {
      return 'bg-success';
    } else {
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
      this.task = new Task(task);

      if (this.isSucceeded || this.isFailed) {
        this.clearInterval();
      }

      if (this.isSucceeded) {
        this.autoClose = true;
      }
    });
  }

  @action
  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
