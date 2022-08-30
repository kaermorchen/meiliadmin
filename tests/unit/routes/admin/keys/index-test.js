import { module, test } from 'qunit';
import { setupTest } from 'meiliadmin/tests/helpers';

module('Unit | Route | admin/keys/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin/keys/index');
    assert.ok(route);
  });
});
