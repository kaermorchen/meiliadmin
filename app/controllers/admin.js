import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import config from 'meiliadmin/config/environment';

export default class AdminController extends Controller {
  @service session;

  config = config;

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
