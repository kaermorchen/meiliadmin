import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  loadingIndicatorRemover() {
    const el = document.querySelector('.loading-indicator');

    if (el) {
      el.parentNode.removeChild(el);
    }
  }
}
