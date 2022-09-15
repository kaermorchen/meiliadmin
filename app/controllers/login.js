import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked error;
  @tracked url;
  @tracked key;

  @action
  async authenticate(e) {
    e.preventDefault();

    this.error = null;

    let { url, key } = this;

    try {
      await this.session.authenticate('authenticator:meilisearch', {
        url,
        key,
      });
    } catch (error) {
      this.error = error.error || error;
    }
  }
}
