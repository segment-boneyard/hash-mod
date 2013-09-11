var hashMod = require('../lib');
var should  = require('should');

describe('hashMod', function () {

  it('#get', function () {
    var buckets = 100;
    var mod = hashMod(100, 'md5');
    var val = mod.get('some string');
    val.should.be.above(-1);
    val.should.be.below(buckets);
  });

});