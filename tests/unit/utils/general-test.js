import {
  dottify,
  applyOptions
} from 'ember-inline-svg/utils/general';

import {
  module,
  test
} from 'qunit';

module('utils: dottify', function() {
  test('replaces slashes with dots', function(assert) {
    assert.equal(dottify('foo/bar/baz'), 'foo.bar.baz');
  });

  test('removes leading slashes before replacing slashes with dots', function(assert) {
    assert.equal(dottify('/foo/bar/baz'), 'foo.bar.baz');
  });
});

module('utils: applyOptions', function() {
  test('applies props to svg element', function(assert) {
    assert.equal(applyOptions('<svg></svg>', {
      'class': 'a-class'
    }), '<svg class="a-class"></svg>');
    assert.equal(applyOptions('<svg></svg>', {
      fill: 'red'
    }), '<svg fill="red"></svg>');
    assert.equal(applyOptions('<svg></svg>', {}), '<svg></svg>');
  });
});