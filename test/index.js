var hashMod = require('../lib');
var should  = require('should');

describe('hashMod', function () {

  describe('#get', function () {
    it('should return a number between 0 and 100', function () {
      var buckets = 100;
      var mod = hashMod(buckets, 'md5');
      var trials = 10000;
      for (var i = 0; i < trials; i += 1) {
        var val = mod.get('string' + Math.random());
        val.should.be.above(-1);
        val.should.be.below(buckets);
      }
    });

    it('should be deterministic', function () {
      var mod = hashMod(100, 'md5');
      var res = mod.get('string');
      res.should.equal(64);
    });
  });

  describe('#_integerHash', function () {
    it('should be deterministic', function () {
      var mod = hashMod(100, 'md5');
      var res = mod._integerHash('string');
      res.should.equal(5.505942970225657e+107);
    });
  });

  describe('#_hash', function () {
    it('should be deterministic', function () {
      var mod = hashMod(100, 'md5');
      var res = mod._hash('string');
      res.should.equal('b45cffe084dd3d20d928bee85e7b0f21');
    });
  });

});