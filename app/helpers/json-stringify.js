import { helper } from '@ember/component/helper';

export default helper(function jsonStringify([data], { replacer, space }) {
  return JSON.stringify(data, replacer, space);
});
