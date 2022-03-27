import Route from '@ember/routing/route';
import { hash } from 'rsvp';

function attributeValue(key) {
  return function () {
    return {
      get() {
        return this.settings[key].includes(this.name);
      },

      set(value) {
        if (value) {
          this.settings[key].addObject(this.name);
        } else {
          this.settings[key].removeObject(this.name);
        }
      },
    };
  };
}

class IndexAttribute {
  name;
  settings;

  @attributeValue('displayedAttributes') displayed;
  @attributeValue('filterableAttributes') filterable;
  @attributeValue('searchableAttributes') searchable;
  @attributeValue('sortableAttributes') sortable;

  constructor(name, settings) {
    this.name = name;
    this.settings = settings;
  }
}

export default class AdminIndexesItemSettingsRoute extends Route {
  async model() {
    const index = this.modelFor('admin.indexes.item');
    const settings = index.getSettings();
    const stats = index.getStats();

    return hash({ index, settings, stats }).then((result) => {
      // Some settings properties may to be ["*"] (all attributes)
      // this convert it to [attr1, attr2, ...]
      ['displayedAttributes', 'searchableAttributes'].forEach((prop) => {
        if (
          result.settings[prop].length === 1 &&
          result.settings[prop][0] === '*'
        ) {
          result.settings[prop] = Object.keys(result.stats.fieldDistribution);
        }
      });
      result.attributes = Object.keys(result.stats.fieldDistribution).map(
        (name) => new IndexAttribute(name, result.settings)
      );

      return result;
    });
  }
}
