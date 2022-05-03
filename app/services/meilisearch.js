import Service from '@ember/service';
import Index from '../models/index';
import query from '../utils/query';

export default class MeilisearchService extends Service {
  getIndexes() {
    return query('indexes').then((indexes) =>
      indexes.map((item) => new Index(item))
    );
  }
}
