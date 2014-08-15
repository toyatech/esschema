var assert = require('assert')
  , fs = require('fs')
  , tv4 = require('tv4')
  , esprima = require('esprima')
  , esschema = require('../esschema.json')

describe('esschema.json', function() {
  it('should be in valid JSON format', function() {
    fs.readFile(__dirname + '/../esschema.json', 'utf8', function (err, data) {
      assert.ifError(err);
      assert.doesNotThrow(function() {
        JSON.parse(data);
      })
    })
  })
  it ('should be in valid JSON Schema format', function() {
    tv4.validate(
      esschema, 
      'http://json-schema.org/schema#', 
      function(isValid, validationError) {
        assert(isValid);
        assert.equal(validationError, undefined);
      }
    )
  })
  fs.readdir(__dirname + '/fixtures/code', function(err, files) {
    assert.ifError(err);
    files.forEach(function(file) {
      it('should validate ' + file, function() {
        fs.readFile(__dirname + '/fixtures/code/' + file, function(err, data) {
           tv4.validate(
             esprima.parse(data),
             esschema,
             function(isValid, validationError) {
               assert(isValid);
               assert.equal(validationError, undefined);
             }
           ) 
        })
      })
    })
  })
})
