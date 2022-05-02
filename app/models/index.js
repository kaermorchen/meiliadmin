export default class Index {
  constructor(data) {
    for (const key in data) {
      this[key] = data[key];
    }
  }
}
