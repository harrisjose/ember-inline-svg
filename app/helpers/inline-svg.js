import Ember from 'ember';
import Helper from '@ember/component/helper';
import { inlineSvg } from 'ember-inline-svg/helpers/inline-svg';
import SVGs from '../svgs';

let helper;

if (Helper && Helper.helper) {
  helper = Helper.helper(function([ path ], options) {
    return inlineSvg(SVGs, path, options);
  });
} else {
  helper = Ember.Handlebars.makeBoundHelper(function(path, options) {
    return inlineSvg(SVGs, path, options.hash || {});
  });
}

export default helper;
