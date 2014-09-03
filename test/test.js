var assert = require('assert')
  , fs = require('fs')
  , tv4 = require('tv4')
  , esschema = require('../esschema.json')
  , Empty = require('./fixtures/Empty.json')
  , FortyTwo = require('./fixtures/FortyTwo.json')

function valid(data, done) {
  var result = tv4.validateResult(data, esschema)
  if (result.error) {
    fs.writeFile(
      './error.json', 
      JSON.stringify(result.error, null, 2),  
      function(err) {
        console.err(err);
    });
  }
  assert.equal(result.valid, true);
  done();
}

function invalid(data, expect, done) {
  var result = tv4.validateResult(data, esschema)
//  console.log(result.error.message);
  assert.equal(result.valid, false);
  assert.equal(result.error.code, expect.code);
  assert.equal((result.error.message.indexOf(expect.message) > -1), true);
  done();
}

function checkMessageMissingRequiredProperty(property) {
  return 'Missing required property: ' + property;
} 

function checkMessageStringDoesNotMatchPattern(pattern) {
  return 'String does not match pattern: ' + pattern
}

function checkMessageInvalidType(found, expected) {
  return 'invalid type: ' + found + ' (expected ' + expected + ')';
}

function checkMessageDataDoesNotMatchAnySchemasFrom(keyword) {
  return 'Data does not match any schemas from "' + keyword + '"';
}

function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

describe('esschema.json', function() {
  describe('definitions', function() {
    describe('Program', function() {
      describe('#type', function() {
        it('should be invalid when not \'Program\'', function(done) {
          var data = clone(Empty);
          data.type = 'Programm';
          var expect = { 
            code: tv4.errorCodes.STRING_PATTERN,
            message: checkMessageStringDoesNotMatchPattern('^Program$')
          };
          invalid(data, expect, done);
        });
        it('should be invalid when not a string', function(done) {
          var data = clone(Empty);
          data.type = 1;
          var expect = { 
            code: tv4.errorCodes.INVALID_TYPE,
            message: checkMessageInvalidType('number', 'string') 
          };
          invalid(data, expect, done);
        });
        it('should be required', function(done) {
          var data = clone(Empty);
          delete data.type;
          var expect = { 
            code: tv4.errorCodes.OBJECT_REQUIRED,
            message: checkMessageMissingRequiredProperty('type')
          };
          invalid(data, expect, done);
        });
      });
      describe('#body', function() {
        it('should be invalid if not an array', function(done) {
          var data = clone(Empty);
          data.body = 1;
          var expect = { 
            code: tv4.errorCodes.INVALID_TYPE,
            message: checkMessageInvalidType('number', 'array') 
          };
          invalid(data, expect, done);
        });
        it('should be an array of a valid type', function(done) {
          var data = clone(FortyTwo);
          data.body[0].type = 'VariableDeclarationn';
          var expect = {
            code: tv4.errorCodes.ONE_OF_MISSING,
            message: checkMessageDataDoesNotMatchAnySchemasFrom('oneOf')
          };
          invalid(data, expect, done);
        }); 
      });
    });
  });
});

describe('Empty.json', function() {
  it('should be valid against esschema.json', function(done) {
    valid(Empty, done);
  });
});

describe('FortyTwo.json', function() {
  it('should be valid against esschema.json', function(done) {
    valid(FortyTwo, done);
  });
});
