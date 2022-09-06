import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsDocumentEditController extends Controller {
  @action
  save(value) {
    this.model.index.saveDocument(JSON.parse(value));
  }
}
