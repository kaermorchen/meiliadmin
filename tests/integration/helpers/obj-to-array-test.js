import { module, test } from 'qunit';
import { setupRenderingTest } from 'meiliadmin/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | obj-to-array', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', { a: 1, b: 2 });

    await render(hbs`{{obj-to-array this.inputValue}}`);

    assert.dom(this.element).hasText('[object Object],[object Object]');
  });
});
