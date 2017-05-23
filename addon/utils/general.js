import $ from 'jquery';

// converts slash paths to dot paths so nested hash values can be fetched with Ember.get
// foo/bar/baz -> foo.bar.baz
export function dottify(path) {
  return (path || '').replace(/^\//g, '').replace(/\//g, '.');
}

// Should consider using browsers createElement instead of jquery
// for perf https://jsperf.com/create-svg but `classList` support is still
// not very good for SVGs across browsers
export function applyOptions(svg, options) {
  let svgElement = $.parseHTML(svg);

  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      $(svgElement).attr(option, options[option]);
    }
  }
  return $(svgElement).prop('outerHTML');
}
