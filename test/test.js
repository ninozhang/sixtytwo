var should = require('should');

var sixtytwo = require('../index');

describe('sixtytwo', function() {

  describe('#toString()', function() {
    it('should return currect result', function() {
      sixtytwo.toString(0).should.equal('0');
      sixtytwo.toString(201314).should.equal('Qn0');
      sixtytwo.toString(999999999999).should.equal('hBxM5A3');
      sixtytwo.toString(1491670057145).should.equal('qgdVxI5');
      sixtytwo.toString(2524579200000).should.equal('IrGR2GQ');
      sixtytwo.toString(3521614606207).should.equal('ZZZZZZZ');
    });
  });

  describe('#parseInt()', function() {
    it('should return currect result', function() {
      sixtytwo.parseInt('0').should.equal(0);
      sixtytwo.parseInt('Qn0').should.equal(201314);
      sixtytwo.parseInt('hBxM5A3').should.equal(999999999999);
      sixtytwo.parseInt('ZZZZZZZ').should.equal(3521614606207);
    });
  });

});