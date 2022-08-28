import Service from '@ember/service';
import Index from '../models/index';
import query from '../utils/query';

export default class MeilisearchService extends Service {
  getIndexes() {
    return query('indexes').then(({ results }) =>
      results.map((item) => new Index(item))
    );
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
}
