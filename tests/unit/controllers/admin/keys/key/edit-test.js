import { module, test } from 'qunit';
import { setupTest } from 'meiliadmin/tests/helpers';

module('Unit | Controller | admin/keys/key/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:admin/keys/key/edit');
    assert.ok(controller);
  });
});
