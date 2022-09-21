import { instance } from '../instance-initializers/application';

export default function query(path, options = {}) {
  const session = instance.lookup('service:session');
  const toaster = instance.lookup('service:toaster');
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

  return fetch(req)
    .then((response) => {
      if (response.status === 204) {
        return;
      } else if (response.ok) {
        return response.json();
      } else {
        response.json().then((reason) => {
          toaster.dangerToast({
            header: reason.type,
            text: reason.message,
          });

          throw new Error('Network response was not OK');
        });
      }
    })
    .catch((response) => {
      response.json().then((reason) => {
        toaster.dangerToast({
          header: reason.type,
          text: reason.message,
        });
      });
    });
}
