import Service from '@ember/service';
import Index from '../models/index';

export default class MeilisearchService extends Service {
  query(path, options) {
    const host = 'http://127.0.0.1:7700';
    const url = `${host}/${path}`;
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(url, Object.assign(defaultOptions, options)).then((response) =>
      response.json()
    );
  }

  getIndexes() {
    return this.query('indexes').then((indexes) =>
      indexes.map((item) => new Index(item))
    );
  }
}
