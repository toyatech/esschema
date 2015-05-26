var estree = require('./node_modules/estree-formal/formal-data/es5.json');

var primatives = ['string', 'number', 'boolean'];

var types = {
  union: function(t) {
    var u = [];
    for (var i = 0; i < t.types.length; i ++) {
      u.push(type(t.types[i]));
    }
    return { $oneOf: u };
  },
  array: function(t) {
    return { type: 'array', items: type(t.base) };
  },
  reference: function(t) {
    if (primatives.indexOf(t.name) > -1) {
      return { type: t.name };
    } else {
      return { $ref: '#/definitions/' + t.name };
    }
  },
  literal: function(t) {
    return types[t.value === null && typeof (t.value) === 'object' ?
      'null' : typeof(t.value)](t);
  },
  string: function(t) {
    return { type: 'string', pattern: '^' + t.value + '$' };
  },
  boolean: function(t) {
    return { type: 'boolean', default: t.value };
  },
  object: function(t) {
    return { type: 'object' };
  },
  null: function(t) {
    return { type: 'null' };
  }
}    

function type(t) {
  return types[t.kind](t);
}

function interface(n) {
  var o = { type: 'object', properties: {} };
  for (var i = 0; i < n.base.length; i++) {
    var t = interface(estree[n.base[i]]);
    for (var k in t) {
      o[k] = t[k];
    }
  }
  for (var t in n.props) {
    o.properties[t] = type(n.props[t]);
  }
  return o;
}

function enumeration(n) {
  return { type: 'string', enum: n.values };
}

function node(n) {
  if (n.kind === 'interface') {
    if (Object.keys(n.props).length) {
      //console.log(n);
    } else {
      interface(n);
    }
  } else {
    enumeration(n);
  }
}

function generate(s, o) {
  for (var k in o) {
    s.definitions[k] = node(o[k]);
  }
  return s;
}

var s = { definitions: {} };

console.log(JSON.stringify(generate(s, estree), null, 2));
