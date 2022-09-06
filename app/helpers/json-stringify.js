import { helper } from '@ember/component/helper';

export default helper(function jsonStringify([data], { replacer, space = 2 }) {
  return JSON.stringify(data, replacer, space);
});
