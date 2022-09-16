export default class Task {
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  get style() {
    switch (this.status) {
      case 'succeeded':
        return 'success';
      case 'failed':
        return 'danger';
      default:
        return null;
    }
  }

  get isQnqueued() {
    return this.status === 'enqueued';
  }

  get isProcessing() {
    return this.status === 'processing';
  }

  get isSucceeded() {
    return this.status === 'succeeded';
  }

  get isFailed() {
    return this.status === 'failed';
  }
}
