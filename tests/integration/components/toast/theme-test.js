import { module, test } from 'qunit';
import { setupRenderingTest } from 'meiliadmin/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toast/theme', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Toast::Theme />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Toast::Theme>
        template block text
      </Toast::Theme>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
