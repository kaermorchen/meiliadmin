import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | indexes/index_element', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:indexes/index-element');
    assert.ok(route);
  });
});
