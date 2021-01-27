import Model, { attr } from '@ember-data/model';

export default class IndexModel extends Model {
  @attr('string') primaryKey;
  @attr('date') createdAt;
  @attr('date') updatedAt;
}
