import { helper } from '@ember/component/helper';

export default helper(function dateTimeFormat([date], named) {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const formatter = new Intl.DateTimeFormat(window.navigator.language, named);

  return formatter.format(date);
});
