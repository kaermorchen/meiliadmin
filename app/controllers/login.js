import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked errorMessage;
  @tracked url = 'http://127.0.0.1:7700';
  @tracked key;

  @action
  async authenticate(e) {
    e.preventDefault();

    let { url, key } = this;

    try {
      await this.session.authenticate('authenticator:meilisearch', url, key);
    } catch (error) {
      this.errorMessage = error.error || error;
    }

    // if (this.session.isAuthenticated) {
    //   this.transitionToRoute('index');
    // }
  }
}
