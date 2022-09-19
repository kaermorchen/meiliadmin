import { module, test } from 'qunit';
import { setupTest } from 'meiliadmin/tests/helpers';

module('Unit | Service | toaster', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:toaster');
    assert.ok(service);
  });
});
