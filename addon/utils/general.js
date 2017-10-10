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

  // Switch to this version once phantom.js is removed entirely
  // or tests that depend on svgs will fail
  //
  // Object.keys(options).forEach(option => {
  //   svg.setAttribute(option, options[option]);
  // });

  for (var option in options) {
    if (Object.hasOwnProperty.call(options, option)) {
      svg.setAttribute(option, options[option]);
    }
  }

  return svg.outerHTML;
}
