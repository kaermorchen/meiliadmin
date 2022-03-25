import { helper } from '@ember/component/helper';

export default helper(function typeOf([value]) {
  return typeof value;
});
