var assert = require('assert')
  , tv4 = require('tv4')
  , schema = require('../esschema.json')
  , fortytwo = require('./fixtures/fortytwo.json');

describe('The answer to Life, Universe, and Everything', function() {
  it('should return true', function() {
    assert(tv4.validate(fortytwo, schema));
  })
  it('should return false', function() {
    //fortytwo.type = "Programm";
    fortytwo.body[0].type = "VariableDeclaratorr";
    assert.equal(tv4.validate(fortytwo, schema), false);
    //fortytwo.type = "Program";
    fortytwo.body[0].type = "VariableDeclarator";
  })
})
