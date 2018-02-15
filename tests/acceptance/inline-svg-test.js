import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, find } from '@ember/test-helpers';

module('Acceptance: InlineSvg', function(hooks) {
  setupApplicationTest(hooks);

  test('displays SVG at root', async function(assert) {
    await visit('/');

    assert.ok(find('.kiwi-image-at-root svg'), 'has an SVG');
  });

  test('runs through SVGO', async function(assert) {
    await visit('/');
   
    assert.ok(!find(".kiwi-image-at-root svg title"), "has stripped the title");
  });

  test('displays SVG in subdirectory', async function(assert) {
    await visit('/subdirectory');

    assert.ok(find('.kiwi-image-in-directory svg'), 'has an SVG which is in a directory');
  });

  test('adds attrs to SVG', async function(assert) {
    await visit('/options');

    assert.ok(find('.kiwi-image-with-attributes svg.with-a-class'), 'has added the class');
  });

  test('trims unnecessary .svg extension', async function(assert) {
    await visit('/extension');

    assert.ok(find('.kiwi-image-with-extension svg'), 'has an SVG, extension was trimmed');
  });
});
