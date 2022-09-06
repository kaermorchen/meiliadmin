import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDocumentsDocumentEditController extends Controller {
  @service router;

  @action
  save(value) {
    this.model.index.saveDocument(JSON.parse(value));
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
