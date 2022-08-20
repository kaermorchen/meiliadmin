import Base from 'ember-simple-auth/authenticators/base';
// import query from '../utils/query';

function makeRequest({ url, key }) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (key) {
    headers.append('Authorization', `Bearer ${key}`);
  }

  const req = new Request(new URL('/version', url), { headers });

  return fetch(req).then(() => ({ url, key }));
}

export default class MeilisearchAuthenticator extends Base {
  restore({ url, key }) {
    return makeRequest({ url, key });
  }

  authenticate(url, key) {
    return makeRequest({ url, key });
  }
}
