import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ActionInvoker from 'meiliadmin/lib/action-invoker';

export default class AdminIndexesItemDocumentsDocumentEditController extends Controller {
  @service router;

  @tracked error;

  constructor() {
    super(...arguments);

    this.invoker = new ActionInvoker();
  }

  @action
  save(value) {
    this.error = null;

    try {
      this.model.index.saveDocument(JSON.parse(value));
    } catch (error) {
      this.error = error.error || error;
    }
  }

  @action
  cancel() {
    const newRouteName = this.router.currentRouteName.replace(
      /\.(new|edit|delete)$/,
      ''
    );
    this.router.transitionTo(newRouteName);
  }
}
