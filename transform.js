var _ = require('lodash')
  , estree = require('./node_modules/estree-formal/formal-data/es5.json');


var schema = { definitions: estree };

console.log(JSON.stringify(_.transform(schema, function(result, value, key) {
  result[key] = _.transform(value, function(
}), null, 2));
