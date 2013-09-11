
var crypto = require('crypto');


/**
 * Expose `createHashMod`.
 */

module.exports = createHashMod;


/**
 * Create a new hasher with a given number of `buckets` and a specified hash
 * algorithm `alg`.
 *
 * @param {Number} buckets
 * @param {String} alg
 * @return {HashMod}
 */

function createHashMod(buckets, algorithm) {
  return new HashMod(buckets, algorithm);
}


/**
 * Initialize a new HashMod with a given number of `buckets` and a specified hash
 * algorithm `alg`.
 *
 * @param {Number} buckets
 * @param {String} alg
 * @return {HashMod}
 */

function HashMod(buckets, algorithm) {
  this.buckets = buckets || 100;
  this.algorithm = algorithm || 'md5';
}


/**
 * Takes the hash of string `str` and returns the number result modded by
 * `buckets`.
 *
 * http://stackoverflow.com/questions/2624192/good-hash-function-for-strings
 *
 * @param {String} Str
 * @return {Integer}
 */

HashMod.prototype.get = function(str) {
  var hash = crypto.createHash(this.algorithm).update(str).digest() + '';
  var num = hash.split('').reduce(function (memo, item) {
    return memo * 31 * item.charCodeAt(0);
  }, 7);
  return num % this.buckets;
};