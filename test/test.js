var fs = require('fs')
  , assert = require('assert')
  , esprima = require('esprima')
  , esvalid = require('esvalid')
  , tv4 = require('tv4')
  , esschema = require('../esschema')
  , schema = require('./fixtures/schema.json')
  , ast = require('./fixtures/ast.json')
  , esst = fs.readFileSync(__dirname + '/fixtures/mongoose-schema-3.8.esst');

describe('esschema', function() {
  describe('.generate()', function() {
    it.skip('should generate a valid JSON Schema', function() {
      tv4.addSchema(schema);
      var s = esschema.generate(ast)
        , r = tv4.validateResult(s, schema);
      console.log(JSON.stringify(r, null, 2));
      assert(r.valid);
    })
    it.skip('should generate a valid JSON Schema from simple AST', function() {
      tv4.addSchema(schema);
      var a = esprima.parse('')
        , s = esschema.generate(a)
        , r = tv4.validateResult(s, schema);
      console.log(JSON.stringify(r, null, 2));
      assert(r.valid);
    })
  })
  describe('template', function() {
    describe('parsed by esprima', function() {
      it('should produce a valid AST', function() {
        var ast = esprima.parse(esst);
        assert(esvalid.isValid(ast));
      })
    })
  })
  describe('esschema template > esprima > esschema generate pipeline', function() {
    it('should produce a valid JSON Schema', function() {
      var ast = esprima.parse(esst);
      assert(esvalid.isValid(ast));
      var ess = esschema.generate(ast);
      
    })
  })
})

describe('json schema', function() {
  describe('mix oneOf and properties', function() {
    it('should be allowed', function() {
      var s = {
        definitions: {
          ab: {
            type: 'object',
            properties: {
              a: { type: 'string' },
              b: { type: 'string' }
            },
            additionalProperties: {
              oneOf: [
                { $ref: '#/definitions/c' },
                { $ref: '#/definitions/d' }
              ]
            }
          },
          c: {
            type: 'object',
            properties: {
              c: { type: 'string' }
            }
          },
          d: {
            type: 'object',
            properties: {
              d: { type: 'string' }
            }
          }
        },
        type: 'object',
        allOf: [
          { $ref: '#/definitions/ab' }
        ]
      };
      var r = tv4.validateResult({a: 'a', b: 'b', c: 'c'}, s);
      debugger;
      console.log(r);
      assert(r.valid);
      //r = tv4.validateResult({a: 'a', b: 'b', d: 'd'}, s);
      //debugger;
      //assert(r.valid);
    })
  })
})
