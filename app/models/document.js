import query from '../utils/query';

export default class Document {
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  // get path() {
  //   return `${this.#index.path}/documents/${this.documentId}`;
  // }

  // get isNew() {
  //   return Boolean(!this.documentId);
  // }

  // get documentId() {
  //   return this[this.#index.primaryKey];
  // }
}
