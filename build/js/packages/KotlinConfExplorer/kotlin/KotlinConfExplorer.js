(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinConfExplorer'.");
    }root.KotlinConfExplorer = factory(typeof KotlinConfExplorer === 'undefined' ? {} : KotlinConfExplorer, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  function main() {
    document.bgColor = 'red';
  }
  _.main = main;
  main();
  Kotlin.defineModule('KotlinConfExplorer', _);
  return _;
}));

//# sourceMappingURL=KotlinConfExplorer.js.map
