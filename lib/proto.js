
/**
 * Module dependencies.
 */

var crypto = require('crypto');

/**
 * Sets hashing algorithm `alg`
 *
 * @param {String} alg
 * @return {Object} self
 * @api public
 */

exports.hash = function(alg) {
  this.alg = alg || 'md5';
  return this;
};

/**
 * Sets number of `buckets`
 *
 * @param {Number} buckets
 * @return {Object} self
 * @api public
 */

exports.buckets = function(b) {
  this.numBuckets = b || 100;
  return this;
};


/**
 * Takes the hash of string `str` and returns the number result modded by
 * `buckets`
 *
 * @param {String} Str
 * @return {Integer} the modded hash
 * @api public
 */

exports.get = function(str) {
  var hash = crypto.createHash(this.alg).update(str).digest() + '';
  // http://stackoverflow.com/questions/2624192/good-hash-function-for-strings
  var num  = hash.split('').reduce(function (memo, item) {
    return memo * 31 * item.charCodeAt(0);
  }, 7);
  return num % this.numBuckets;
};