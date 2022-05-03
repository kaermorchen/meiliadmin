import query from '../utils/query';
import { TrackedArray } from 'tracked-built-ins';

export default class Index {
  constructor(data) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get indexPath() {
    return `indexes/${this.uid}`;
  }

  getSortableAttributes() {
    return query(`${this.indexPath}/settings/sortable-attributes`).then(
      (result) => new TrackedArray(result)
    );
  }

  getStats() {
    return query(`${this.indexPath}/stats`);
  }

  getSettings() {
    return query(`${this.indexPath}/settings`);
  }

  search(q) {
    return query(`${this.indexPath}/search`, {
      method: 'POST',
      body: JSON.stringify({ q }),
    });
  }
}
