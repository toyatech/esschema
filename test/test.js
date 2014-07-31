var fs = require('fs'),
  esprima = require('esprima'),
  tv4 = require('tv4');

var schema = JSON.parse(fs.readFileSync(__dirname + '/esschema.json'));
var data = JSON.stringify(esprima.parse(fs.readFileSync(__dirname + '/test/mongoose.js')));


console.log(tv4.validate(data, schema));

console.log(tv4.error);
