import { helper } from '@ember/component/helper';

export default helper(function jsonParse([str]) {
  return JSON.parse(str);
});
