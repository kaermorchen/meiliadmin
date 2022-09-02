import Controller from '@ember/controller';
// import { action, get, set } from '@ember/object';
// import { capitalize } from '@ember/string';
// import arrayEquals from 'meiliadmin/utils/array-equals';
// import { ContentSaveOutline, Check, CircleMedium } from 'ember-mdi';

export default class AdminIndexesItemSettingsController extends Controller {
  // @action
  // save(name, value) {
  //   const fnName = `update${capitalize(name)}`;
  //   return this.model.index[fnName](value);
  // }
  // @action
  // async cancel(name) {
  //   console.log(...arguments, this.model[name]);
  //   const fnName = `get${capitalize(name)}`;
  //   this.model[name] = await this.model.index[fnName]();
  //   console.log(this.model[name]);
  // }
  // emptyObj = {};
  // ContentSaveOutline = ContentSaveOutline;
  // Check = Check;
  // CircleMedium = CircleMedium;
  // get rankingRulesFields() {
  //   const arr = [];
  //   // eslint-disable-next-line ember/no-get
  //   const rankingRules = get(this, 'model.settings.rankingRules');
  //   Object.keys(this.model.stats.fieldDistribution).forEach((key) => {
  //     const asc = `${key}:asc`;
  //     const desc = `${key}:desc`;
  //     if (!rankingRules.includes(asc)) {
  //       arr.push(asc);
  //     }
  //     if (!rankingRules.includes(desc)) {
  //       arr.push(desc);
  //     }
  //   });
  //   return arr;
  // }
  // @action
  // selectNewRankingRule(value) {
  //   this.model.settings.rankingRules.addObject(value);
  // }
  // @action
  // removeRankingRule(value) {
  //   this.model.settings.rankingRules.removeObject(value);
  // }
  // @action
  // saveStrToJSON(prop, emptyValue, str) {
  //   if (typeof str !== 'string' || str === '') {
  //     this.model.settings[prop] = emptyValue;
  //   } else {
  //     this.model.settings[prop] = JSON.parse(str);
  //   }
  // }
  // @action
  // save() {
  //   const fields = Object.keys(this.model.stats.fieldDistribution);
  //   const settings = Object.assign({}, this.model.settings);
  //   ['displayedAttributes', 'searchableAttributes'].forEach((prop) => {
  //     if (arrayEquals(settings[prop].sort(), fields.sort())) {
  //       settings[prop] = ['*'];
  //     }
  //   });
  //   return this.model.index.updateSettings(settings);
  // }
  // @action
  // reorderItems(itemModels) {
  //   set(this.model.settings, 'rankingRules', itemModels);
  // }
  // @action
  // setAttributeValue(key, item) {
  //   let arr = this.model[key];
  //   if (arr.length === 1 && arr[0] === '*') {
  //     arr = Array.from(this.model.index.fields);
  //   }
  //   if (arr.includes(item)) {
  //     arr = arr.filter((i) => i !== item);
  //   } else {
  //     arr = arr.concat([item]);
  //   }
  //   set(this.model, key, arr);
  // }
  // @action
  // update(key, value) {
  //   this.model.index[key](value);
  // }
  // @action
  // reset(key) {
  //   this.model.index[key]();
  // }
}
