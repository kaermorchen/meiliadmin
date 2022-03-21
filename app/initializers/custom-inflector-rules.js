import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular('index', 'indexes');
}

export default {
  initialize,
};
