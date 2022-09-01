import Service from '@ember/service';
import Index from '../models/index';
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
    return query('keys');
  }

  getKey(uid) {
    return query(`keys/${uid}`);
  }

  getTasks() {
    return query('tasks');
  }

  getTask(uid) {
    return query(`tasks/${uid}`);
  }
}
