import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDocumentsDocumentDeleteController extends Controller {
  @service router;

  @action
  delete() {
    this.model.index.deleteDocument(this.model.document);
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
