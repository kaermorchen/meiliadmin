import { helper } from '@ember/component/helper';

function split(positional) {
  let [separator, maybeValue] = positional;
  console.log(positional.length, separator, maybeValue);
  return (str) => str.split(separator);
}

export default helper(split);
