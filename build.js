var generate = require('./esschema-build');
var es5 = require('./node_modules/estree-formal/formal-data/es5.json');

console.log(JSON.stringify(generate(es5), null, 2));
