import { get } from '@ember/object';
import { assert } from '@ember/debug';
import { htmlSafe } from '@ember/string';
import {
  dottify,
  applyOptions
} from 'ember-inline-svg/utils/general';

export function inlineSvg(SVGs, path, options) {
  var jsonPath = dottify(path);
  var svg = get(SVGs, jsonPath);

  // TODO: Ember.get should return `null`, not `undefined`.
  // if (svg === null && /\.svg$/.test(path))
  if (typeof svg === 'undefined' && /\.svg$/.test(path)) {
    svg = get(SVGs, jsonPath.slice(0, -4));
  }

  assert('No SVG found for ' + path, svg);

  svg = applyOptions(svg, options);

  return htmlSafe(svg);
}
