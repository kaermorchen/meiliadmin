import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsDocumentDeleteController extends Controller {
  @action
  delete() {
    this.model.index.deleteDocument(this.model.document);
  }
}
