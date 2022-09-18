import { module, test } from 'qunit';
import { setupRenderingTest } from 'meiliadmin/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | DateTimeFormat', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', new Date(2000, 0, 1));

    await render(hbs`{{date-time-format this.inputValue}}`);

    assert.dom(this.element).hasText('1/1/2000');
  });
});
