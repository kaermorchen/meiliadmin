import { instance } from '../instance-initializers/application';

export default function query(path, options = {}) {
  const session = instance.lookup('service:session');
  const { url, key } = session.data.authenticated;
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const headers = new Headers(Object.assign(defaultHeaders, options.headers));

  if (key) {
    headers.append('Authorization', `Bearer ${key}`);
  }

  const req = new Request(
    new URL(path, url),
    Object.assign(options, { headers })
  );

  return fetch(req).then((res) => res.json());
}
