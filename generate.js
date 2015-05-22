var _ = require('lodash')
  , estree = require('./node_modules/estree-formal/formal-data/es5.json');

function type(t) {
}

function interface(n, k) {
  return { type: 'object' };
}

function enumeration(n, k) {
  return { type: 'string', enum: n.values };
}

function node(n, k) {
  return n.kind === 'interface' ? interface(n, k) : enumeration(n, k);
}

function generate(o) {
  _.forEach(o, node);   
}

//console.log(JSON.stringify(generate(estree), null, 2));
generate(estree);
