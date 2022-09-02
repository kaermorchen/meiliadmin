import { helper } from '@ember/component/helper';
import { capitalize, underscore } from '@ember/string';

export default helper(function namelize([str]) {
  return capitalize(underscore(str).replaceAll('_', ' '));
});
