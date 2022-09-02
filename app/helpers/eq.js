import { helper } from '@ember/component/helper';

export default helper(function eq(params /*, named*/) {
  return params[0] === params[1];
});
