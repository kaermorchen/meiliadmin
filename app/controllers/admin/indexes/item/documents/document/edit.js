import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsDocumentEditController extends Controller {
  @action
  save(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = formData.get('document');

    this.model.index.saveDocument(data);
  }
}
