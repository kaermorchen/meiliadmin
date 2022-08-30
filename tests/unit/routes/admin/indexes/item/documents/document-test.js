import { module, test } from 'qunit';
import { setupTest } from 'meiliadmin/tests/helpers';

module(
  'Unit | Route | admin/indexes/item/documents/document',
  function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
      let route = this.owner.lookup(
        'route:admin/indexes/item/documents/document'
      );
      assert.ok(route);
    });
  }
);
