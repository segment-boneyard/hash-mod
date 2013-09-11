var HashMod = require('../lib')
  , should  = require('should');

describe('hashmod', function () {

  it('#get', function () {
    var buckets = 100;
    var mod = HashMod().hash('md5').buckets(buckets);
    var val = mod.get('some string');
    val.should.be.above(-1);
    val.should.be.below(buckets);
  });

});