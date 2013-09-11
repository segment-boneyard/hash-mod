var hashMod = require('../lib');
var should  = require('should');

describe('hashMod', function () {

  describe('#get', function () {
    it('should return a number between 0 and 100', function () {
      var buckets = 100;
      var mod = hashMod(buckets);
      var trials = 10000;
      for (var i = 0; i < trials; i += 1) {
        var val = mod('string' + Math.random());
        val.should.be.above(-1);
        val.should.be.below(buckets);
      }
    });

    it('should be deterministic', function () {
      var mod = hashMod(100);
      var res = mod('string');
      res.should.equal(13);
    });
  });
});