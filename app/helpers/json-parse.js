import { helper } from '@ember/component/helper';

export default helper(function jsonParse() {
  return (str) => JSON.parse(str);
});
