import { module, test } from 'qunit';
import { setupRenderingTest } from 'meiliadmin/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | not-eq', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{not-eq 1 2}}`);

    assert.dom(this.element).hasText('true');

    await render(hbs`{{not-eq 1 1}}`);

    assert.dom(this.element).hasText('false');
  });
});
