import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AdminController extends Controller {
  @service session;

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
