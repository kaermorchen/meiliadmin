import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsDocumentController extends Controller {
  @action
  save(event) {
    event.preventDefault();

    this.model.index.saveDocument(this.model.document);
  }
}
