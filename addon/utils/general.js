// converts slash paths to dot paths so nested hash values can be fetched with Ember.get
// foo/bar/baz -> foo.bar.baz
export function dottify(path) {
  return (path || '').replace(/^\//g, '').replace(/\//g, '.');
}

// Should consider using document fragments for perf
// https://jsperf.com/svg-create-and-set-attr
// https://jsperf.com/create-svg-native
export function applyOptions(svg, options) {
  var div = document.createElement('div');
  div.innerHTML = svg;
  svg = div.firstChild;

  Object.keys(options).forEach( option => {
    svg.setAttribute(option, options[option]);
  })

  return svg.outerHTML;
}
