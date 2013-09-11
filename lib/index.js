/**
 * Module dependencies.
 */

var proto = require('./proto');

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
 * @api public
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
 * @api public
 */

function HashMod(buckets, alg) {
  this.numBuckets = buckets || 100;
  this.alg = alg || 'md5';
}

// prototype
HashMod.prototype = {};
for (var key in proto) HashMod.prototype[key] = proto[key];