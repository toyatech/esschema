var types = ['string', 'number', 'integer', 'object', 'array', 'literal', 'null'];

function reduce(o, k, d) { d[k] = {}; return Object.keys(o).reduce(function(p, c) {
  if (Object.keys(o[c].props).length > 0) { p[k][c] = kinds[o[c].kind](o[c]); return p; }
  else { p[k][base(c)] = kinds[o[c].kind](o[c]); return p; } }, d); }

function map(a, k, d) { return a.map(function(o) { return kinds[o.kind](o) }, []) }

function type(t) { if (!t) return 'null'; else return typeof(t); };

function refs(r) { if (types.indexOf(r) > -1) return kinds[r]();
  else return { $ref: '#/definitions/' + r }; }

function props(o) { return reduce(o.props, 'properties', { type: 'object' } ); }

function base(b) { if (b === 'Node') return b; else return b + 'Base' }

var kinds = {
  interface: function (o) { var t = {}; if (o.base.length > 0) {
    t.allOf = []; o.base.forEach(function(v) { t.allOf.push(refs(base(v))) });
    if (Object.keys(o.props).length > 0) { t.allOf.push(props(o)); } }
    else { t = props(o) } return t },
  enum: function (o) { return { type: 'string', enum: o.values  } },
  reference: function (o) { return refs(o.name) },
  union: function (o) { return { oneOf: map(o.types) } },
  string: function (o) { return { type: 'string' } },
  number: function (o) { return { type: 'number' } },
  array: function (o) { return { type: 'array', items: kinds[o.base.kind](o.base) } },
  object: function (o) { return { type: 'object'} },
  literal: function (o) { var t = { type: type(o.value) }; if (t.type === 'string')
    t.pattern = '^' + o.value + '$'; return t }
}

var o = { title: 'esschema', description: 'JSON Schema for JavaScript ASTs' }

module.exports = function(estree) { return reduce(estree, 'definitions', o)};
