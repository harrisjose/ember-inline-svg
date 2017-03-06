import $ from 'jquery';

// converts slash paths to dot paths so nested hash values can be fetched with Ember.get
// foo/bar/baz -> foo.bar.baz
export function dottify(path) {
  return (path || '').replace(/^\//g, '').replace(/\//g, '.');
}

// Should consider using browsers createElement and innerHtml instead of jquery
// for perf https://jsperf.com/create-svg but `classList` support is still
// not very good for SVGs
export function applyOptions(svg, options) {
  let svgElement = $.parseHTML(svg);
  Object.entries(options).forEach(([attr, value]) => {
    svgElement.attr(attr, value);
  });
  return svgElement.prop('outerHTML');
}
