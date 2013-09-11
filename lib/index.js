
var crypto = require('crypto');


/**
 * Expose `createHashMod`.
 */

module.exports = createHashMod;


/**
 * Create a new `HashMod` with a given number of `buckets` and a specified hash
 * algorithm `alg`.
 *
 * @param {Number} buckets
 * @param {String} algorithm
 * @return {HashMod}
 */

function createHashMod (buckets, algorithm) {
  return new HashMod(buckets, algorithm);
}


/**
 * Initialize a `HashMod` with a given number of `buckets` and a specified
 * hash `algorithm`.
 *
 * @param {Number} buckets
 * @param {String} algorithm
 * @return {HashMod}
 */

function HashMod (buckets, algorithm) {
  this.buckets = buckets || 100;
  this.algorithm = algorithm || 'md5';
}


/**
 * Returns the integer hash of a `string` modded by `buckets`.
 *
 * @param {String} string
 * @return {Integer}
 */

HashMod.prototype.get = function (string) {
  return this._integerHash(string) % this.buckets;
};


/**
 * Return the integer hash of a `string`.
 *
 * http://stackoverflow.com/questions/2624192/good-hash-function-for-strings
 *
 * @param {String} string
 * @returns {Number}
 */

HashMod.prototype._integerHash = function (string) {
  var hash = this._hash(string);
  return hash.split('').reduce(function (memo, item) {
    return memo * 31 * item.charCodeAt(0);
  }, 7);
};


/**
 * Return the hash of a `string`.
 *
 * @param {String} string
 * @returns {String}
 */

HashMod.prototype._hash = function (string) {
  return crypto.createHash(this.algorithm).update(string+'').digest()+'';
};