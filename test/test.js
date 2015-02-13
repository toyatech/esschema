var assert = require('assert')
  , esprima = require('esprima')
  , tv4 = require('tv4')
  , esschema = require('../esschema')
  , schema = require('./fixtures/schema.json')
  , ast = require('./fixtures/ast.json');

describe('esschema', function() {
  describe('.generate()', function() {
    it('should generate a valid JSON Schema', function() {
      tv4.addSchema(schema);
      var s = esschema.generate(ast)
        , r = tv4.validateResult(s, schema);
      console.log(JSON.stringify(r, null, 2));
      assert(r.valid);
    })
    it('should generate a valid JSON Schema from simple AST', function() {
      tv4.addSchema(schema);
      var a = esprima.parse('')
        , s = esschema.generate(a)
        , r = tv4.validateResult(s, schema);
      console.log(JSON.stringify(r, null, 2));
      assert(r.valid);
    })
  })
})
