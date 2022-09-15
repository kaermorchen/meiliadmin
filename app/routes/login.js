import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;

  beforeModel() {
    this.session.prohibitAuthentication('admin');
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.error = null;
    }
  }
}
