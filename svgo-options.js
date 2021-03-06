/* eslint-env node */

module.exports = [
  { removeDoctype: true },
  { removeXMLProcInst: true },
  { removeComments: true },
  { removeMetadata: true },
  { removeEditorsNSData: true },
  { cleanupAttrs: true },
  { inlineStyles: true },
  { minifyStyles: true },
  { convertStyleToAttrs: true },
  { cleanupIDs: false },
  { removeUselessDefs: true },
  { cleanupNumericValues: true },
  { convertColors: true },
  { removeUnknownsAndDefaults: true },
  { removeNonInheritableGroupAttrs: true },
  { removeUselessStrokeAndFill: true },
  { removeViewBox: false },
  { cleanupEnableBackground: true },
  { removeHiddenElems: true },
  { removeEmptyText: true },
  { convertShapeToPath: true },
  { moveElemsAttrsToGroup: true },
  { moveGroupAttrsToElems: true },
  { collapseGroups: true },
  { convertPathData: true },
  { convertTransform: true },
  { removeEmptyAttrs: true },
  { removeEmptyContainers: true },
  { mergePaths: true },
  { removeUnusedNS: true },
  { removeTitle: true },
  { removeDesc: true },
  { prefixIds: true }
];
