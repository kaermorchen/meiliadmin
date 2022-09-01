import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsDocumentRoute extends Route {
  model({ document_id }) {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      document: index.getDocument(document_id),
    });
  }
}
