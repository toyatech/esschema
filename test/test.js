var assert = require('assert')
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
  })
})
