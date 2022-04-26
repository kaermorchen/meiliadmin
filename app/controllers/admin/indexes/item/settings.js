import Controller from '@ember/controller';
import { action, get } from '@ember/object';
import arrayEquals from 'meilisearch-admin/utils/array-equals';
import DatabaseArrowUpOutline from 'ember-mdi/components/md-icon/database-arrow-up-outline';

export default class AdminIndexesItemSettingsController extends Controller {
  emptyObj = {};
  DatabaseArrowUpOutline = DatabaseArrowUpOutline;

  get rankingRulesFields() {
    const arr = [];
    // eslint-disable-next-line ember/no-get
    const rankingRules = get(this, 'model.settings.rankingRules');

    Object.keys(this.model.stats.fieldDistribution).forEach((key) => {
      const asc = `${key}:asc`;
      const desc = `${key}:desc`;

      if (!rankingRules.includes(asc)) {
        arr.push(asc);
      }

      if (!rankingRules.includes(desc)) {
        arr.push(desc);
      }
    });

    return arr;
  }

  @action
  selectNewRankingRule(value) {
    this.model.settings.rankingRules.addObject(value);
  }

  @action
  removeRankingRule(value) {
    this.model.settings.rankingRules.removeObject(value);
  }

  @action
  saveStrToJSON(prop, emptyValue, str) {
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
