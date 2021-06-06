import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | indexes/element', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:indexes/element');
    assert.ok(route);
  });
});
