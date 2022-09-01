import Route from '@ember/routing/route';
import Document from '../../../../../models/document';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsNewRoute extends Route {
  templateName = 'admin.indexes.item.documents.document';
  controllerName = 'admin.indexes.item.documents.document';

  model() {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      document: new Document(),
    });
  }
}
