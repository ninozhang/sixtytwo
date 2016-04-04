var should = require('should');

var sixtytwo = require('../index');

describe('sixtytwo', function() {

  describe('#toString()', function() {
    it('should return currect result', function() {
      sixtytwo.toString(0).should.equal('0');
      sixtytwo.toString(201314).should.equal('Qn0');
      sixtytwo.toString(999999999999).should.equal('hBxM5A3');
    });
  });

  describe('#parseInt()', function() {
    it('should return currect result', function() {
      sixtytwo.parseInt('0').should.equal(0);
      sixtytwo.parseInt('Qn0').should.equal(201314);
      sixtytwo.parseInt('hBxM5A3').should.equal(999999999999);
    });
  });

});