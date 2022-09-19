import Service from '@ember/service';
import Index from '../models/index';
import Key from '../models/key';
import Task from '../models/task';
import query from '../utils/query';

export default class MeilisearchService extends Service {
  getIndexes() {
    return query('indexes').then((data) => {
      data.results = data.results.map((item) => new Index(item));
      return data;
    });
  }

  getIndex(index_uid) {
    return query(`indexes/${index_uid}`).then((item) => new Index(item));
  }

  deleteIndex(index_uid) {
    return query(`indexes/${index_uid}`, {
      method: 'DELETE',
    });
  }

  getHealth() {
    return query('health');
  }

  getVersion() {
    return query('version');
  }

  getStats() {
    return query('stats');
  }

  getKeys() {
    return query('keys').then((data) => {
      data.results = data.results.map((item) => new Key(item));
      return data;
    });
  }

  getKey(uid) {
    return query(`keys/${uid}`).then((item) => new Key(item));
  }

  deleteKey(uid) {
    return query(`keys/${uid}`, {
      method: 'DELETE',
    });
  }

  getTasks(params, options = {}) {
    // Clear from undefined fields
    Object.keys(params).forEach((key) => params[key] ?? delete params[key]);

    return query(`tasks?${new URLSearchParams(params)}`, options).then(
      (data) => {
        data.results = data.results.map((item) => new Task(item));
        return data;
      }
    );
  }

  getTask(uid) {
    return query(`tasks/${uid}`).then((item) => new Task(item));
  }
}
