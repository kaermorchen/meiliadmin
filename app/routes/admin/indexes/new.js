import Route from '@ember/routing/route';
import Index from '../../../models/index';

export default class AdminIndexesNewRoute extends Route {
  templateName = 'admin.indexes.item.edit';
  controllerName = 'admin.indexes.item.edit';

  model() {
    return new Index();
  }
}
