import { helper } from '@ember/component/helper';

export default helper(function notEq([arg1, arg2] /*, named*/) {
  return arg1 !== arg2;
});
