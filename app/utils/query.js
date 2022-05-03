const host = 'http://127.0.0.1:7700';

export default function query(path, options) {
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
