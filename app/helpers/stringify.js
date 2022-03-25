import { helper } from '@ember/component/helper';

export default helper(function stringify([value] /*, named*/) {
  return JSON.stringify(value, null, 1);
});
