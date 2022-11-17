import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminIndexesItemDocumentsNewRoute extends Route {
  model() {
    const index = this.modelFor('admin.indexes.item');
    const documents = [{ [index.primaryKey]: '' }];
    const uri = 'https://docs.meilisearch.com/reference/api/documents';
    const schema = {
      uri,
      fileMatch: [uri],
      schema: {
        $id: uri,
        type: 'array',
        items: index.schema,
        minItems: 1,
      },
    };

    return hash({ index, documents, schema });
  }
}
