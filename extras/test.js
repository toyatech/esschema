var fs = require('fs')
  , esprima = require('esprima')
  , tv4 = require('tv4')

var esschema = require('../esschema.json')
  , mongoose = require('./mongoose.json')

tv4.addSchema('http://esschema.org/esschema#', esschema);

var schema = fs.readFileSync('./mongoose.js');

var result = tv4.validateResult(esprima.parse(schema), mongoose);

console.log(result.valid);
