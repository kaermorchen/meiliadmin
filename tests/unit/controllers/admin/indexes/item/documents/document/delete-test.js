import { module, test } from 'qunit';
import { setupTest } from 'meiliadmin/tests/helpers';

module(
  'Unit | Controller | admin/indexes/item/documents/document/delete',
  function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
      let controller = this.owner.lookup(
        'controller:admin/indexes/item/documents/document/delete'
      );
      assert.ok(controller);
    });
  }
);
