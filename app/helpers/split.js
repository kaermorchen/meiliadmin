import { helper } from '@ember/component/helper';

function split([separator]) {
  return (str) => str.split(separator);
}

export default helper(split);
