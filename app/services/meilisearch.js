import Service from '@ember/service';
import { MeiliSearch } from 'meilisearch';

export default class MeilisearchService extends Service {
  constructor() {
    super();

    const client = new MeiliSearch({
      host: 'http://127.0.0.1:7700',
    });

    return new Proxy(this, {
      get(target, prop, receiver) {
        return function (...args) {
          if (typeof client[prop] === 'function') {
            return client[prop].apply(client, args);
          }

          return Reflect.get(target, prop, receiver);
        };
      },
    });
  }
}
