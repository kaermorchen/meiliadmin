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
    const stats = index.stats;

    return hash({
      index,
      stats,
      displayedAttributes: index.getDisplayedAttributes(),
      searchableAttributes: index.getSearchableAttributes(),
    });
  }
}
