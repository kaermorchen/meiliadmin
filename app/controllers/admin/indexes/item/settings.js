import Controller from '@ember/controller';
import { action } from '@ember/object';
import arrayEquals from 'meilisearch-admin/utils/array-equals';

export default class AdminIndexesItemSettingsController extends Controller {
  emptyObj = {};

  @action
  saveStrToJSON(prop, emptyValue, str) {
    console.log(str, prop, emptyValue);
    if (typeof str !== 'string' || str === '') {
      this.model.settings[prop] = emptyValue;
    } else {
      this.model.settings[prop] = JSON.parse(str);
    }
  }

  @action
  save() {
    const fields = Object.keys(this.model.stats.fieldDistribution);
    const settings = Object.assign({}, this.model.settings);

    ['displayedAttributes', 'searchableAttributes'].forEach((prop) => {
      if (arrayEquals(settings[prop].sort(), fields.sort())) {
        settings[prop] = ['*'];
      }
    });

    return this.model.index.updateSettings(settings);
  }
}
