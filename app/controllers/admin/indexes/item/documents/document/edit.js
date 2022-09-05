import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsDocumentEditController extends Controller {
  @action
  save() {
    this.model.index.saveDocument(this.model.document);
  }
}
