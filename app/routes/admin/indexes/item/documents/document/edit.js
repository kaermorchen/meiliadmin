import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsDocumentEditRoute extends Route {
  model() {
    const index = this.modelFor('admin.indexes.item');
    const { document_id } = this.paramsFor(
      'admin.indexes.item.documents.document'
    );

    return hash({
      index,
      document: index.getDocument(document_id),
    });
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.error = null;
    }
  }
}
