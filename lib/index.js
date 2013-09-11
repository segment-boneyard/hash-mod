/**
 * Module dependencies.
 */

var crypto = require('crypto');

/**
 * Expose `createHashMod`.
 */

module.exports = createHashMod;


/**
 * Create a new hasher with a given number of `buckets` and a specified hash
 * algorithm `alg`
 *
 * @param {Number} buckets
 * @param {String} alg
 * @return {HashMod}
 */

function createHashMod(buckets, alg) {
  return new HashMod(buckets, alg);
}

/**
 * Initialize a new HashMod with a given number of `buckets` and a specified hash
 * algorithm `alg`
 *
 * @param {Number} buckets
 * @param {String} alg
 * @return {HashMod}
 */

function HashMod(buckets, alg) {
  this.numBuckets = buckets || 100;
  this.alg = alg || 'md5';
}

/**
 * Sets hashing algorithm `alg`
 *
 * @param {String} alg
 * @return {Object} self
 */

HashMod.prototype.hash = function(alg) {
  this.alg = alg || 'md5';
  return this;
};

/**
 * Sets number of `buckets`
 *
 * @param {Number} buckets
 * @return {Object} self
 */

HashMod.prototype.buckets = function(b) {
  this.numBuckets = b || 100;
  return this;
};


/**
 * Takes the hash of string `str` and returns the number result modded by
 * `buckets`
 *
 * @param {String} Str
 * @return {Integer} the modded hash
 */

HashMod.prototype.get = function(str) {
  var hash = crypto.createHash(this.alg).update(str).digest() + '';
  // http://stackoverflow.com/questions/2624192/good-hash-function-for-strings
  var num  = hash.split('').reduce(function (memo, item) {
    return memo * 31 * item.charCodeAt(0);
  }, 7);
  return num % this.numBuckets;
};