export default class Document {
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }
}
