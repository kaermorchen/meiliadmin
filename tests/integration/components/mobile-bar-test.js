import { module, test } from 'qunit';
import { setupRenderingTest } from 'meiliadmin/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mobile-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<MobileBar />`);

    assert.dom(this.element).hasText('Menu Meiliadmin');
  });
});
