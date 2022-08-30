import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsDocumentRoute extends Route {
  model({ uid }) {
    const index = this.modelFor('admin.indexes.item');

    return hash({
      index,
      document: index.getDocument(uid),
    });
  }
}
