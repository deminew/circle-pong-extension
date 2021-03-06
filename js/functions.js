/**
 * Short form for getting elements by id.
 * @param {string} id The id.
 */
function $(id) {
  return document.getElementById(id);
}

/**
 * Base namespace for the Hangout Library.
 *
 * @const
 */
var hangout = hangout || {};

/**
 * Inherit the prototype methods from one constructor into another.
 * Borrowed from the Closure Library.
 *
 * @param {Function} childCtor Child class.
 * @param {Function} parentCtor Parent class.
 */
hangout.inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  childCtor.prototype.constructor = childCtor;
};
