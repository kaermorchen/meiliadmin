import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminIndexesItemDocumentsDocumentDeleteController extends Controller {
  @service router;
  @service toasts;

  @action
  delete() {
    return this.model.index
      .deleteDocument(this.model.document)
      .then(this.toasts.taskToast);
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
