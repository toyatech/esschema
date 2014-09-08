var fs = require('fs')
  , esprima = require('esprima')
  , tv4 = require('tv4')

var esschema = require('../esschema.json')
  , commonjsModule = require('./commonjs-module-1.0.json')

tv4.addSchema('http://esschema.org/esschema#', esschema);

var schema = fs.readFileSync('./commonjs-module.js');

var result = tv4.validateResult(esprima.parse(schema), commonjsModule);

debugger
console.log(result.valid);
