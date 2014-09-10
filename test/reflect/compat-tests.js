var assert = require('assert')
  , compat = require('./compat');

describe('The compatibility tests from the esprima project', function () {
    it('should return no validation failures', function (done) {
        var result = compat.execute();
debugger
    	assert(result.validationFailures.length < 1); 
        done();
    });
});
