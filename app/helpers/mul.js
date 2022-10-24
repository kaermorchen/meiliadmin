import { helper } from '@ember/component/helper';

export default helper(function mul([a, b]) {
  return Math.imul(a, b);
});
