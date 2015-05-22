var estree = require('../node_modules/estree-formal/formal-data/es5.json');

function processType(t) {
  if (t.kind === 'reference') {
    if (t.name === 'string') {
      return { type: 'string' };
    } else if (t.name === 'boolean') {
      return { type: 'boolean' };
    } else if (t.name === 'number') {
      return { type: 'number' };
    } else {
      return { $ref: '#/definitions/' + t.name };
    }
  } else if (t.kind === 'union') {
    var u = [];
    for (var i = 0; i < t.types.length; i++) {
      u.push(processType(t.types[i]));
    }
    return { $oneof: u };
  } else if (t.kind === 'array') {
    return { type: 'array', items: processType(t.base) };
  }else if (t.kind === 'literal') {
    if (typeof(t.value) === 'string') {
      return { type: 'string', pattern: '^' + t.value + '$' };
    } else if (t.value === null && typeof(t.value) === 'object') {
      return { type: 'null' };
    } else if (typeof(t.value) === 'boolean') {
      return { type: 'boolean', default: t.value };
    }
  }
}

function processProperties(n, o) {
  for (var i = 0; i < n.base.length; i++) {
    processProperties(estree[n.base[i]], o);
  }
  for (var i in n.props) {
    o.properties[i] = processType(n.props[i]);
  }
  return o;  
}

function estree2esschema(estree) { 
  var s = { definitions: { } };
  for (k in estree) {
    var n = estree[k];
    if (n.kind === 'interface') {
      if (Object.keys(n.props).length === 0) {
        s.definitions[k] = { type: 'object', $oneOf: [] };
      } else {
        var o = { type: 'object', properties: {} };
        s.definitions[k] = processProperties(n, o);
      }
    }
  }
  return s;
}

console.log(JSON.stringify(estree2esschema(estree), null, 2));
