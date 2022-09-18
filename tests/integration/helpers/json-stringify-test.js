import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | json-stringify', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', { a: 1, b: 2 });

    await render(hbs`{{json-stringify this.inputValue}}`);

    assert.dom(this.element).hasText('{ "a": 1, "b": 2 }');
  });
});
