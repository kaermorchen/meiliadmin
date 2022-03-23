import { helper } from '@ember/component/helper';
import { capitalize as func } from '@ember/string';

export default helper(function capitalize([str]) {
  return func(str);
});
