import { helper } from '@ember/component/helper';

// Nullish coalescing operator (??)
export default helper(function nuCo([arg1, arg2] /*, named*/) {
  return arg1 ?? arg2;
});
