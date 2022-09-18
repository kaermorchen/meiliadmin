import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { capitalize } from '@ember/string';

module('Integration | Helper | capitalize', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', capitalize('hello world'));

    await render(hbs`{{capitalize this.inputValue}}`);

    assert.dom(this.element).hasText('Hello world');
  });
});
