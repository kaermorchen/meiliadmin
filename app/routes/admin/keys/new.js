import Route from '@ember/routing/route';
import Key from 'meiliadmin/models/key';

export default class AdminKeysNewRoute extends Route {
  templateName = 'admin.keys.key.edit';
  controllerName = 'admin.keys.key.edit';

  model() {
    return new Key();
  }
}
