// converts slash paths to dot paths so nested hash values can be fetched with Ember.get
// foo/bar/baz -> foo.bar.baz
export function dottify(path) {
  return (path || '').replace(/^\//g, '').replace(/\//g, '.');
}

export function applyOptions(svg, options) {
  if (!options || !(Object.keys(options).length)) {
    return svg;
  }

  let attrString = Object.keys(options).reduce((attrs, attr) => {
    return `${attrs} ${attr}="${options[attr]}"`;
  }, '');

  return svg.replace('<svg', `<svg ${attrString.trim()}`);
}
