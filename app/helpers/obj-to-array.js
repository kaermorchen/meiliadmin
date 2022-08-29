import { helper } from '@ember/component/helper';

export default helper(function objToArray([obj]) {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
});
