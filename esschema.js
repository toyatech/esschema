(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    factory((root.esschema = {}));
  }
}(this, function (exports) {
  'use strict';

  function generate(o, options) {
    options = options || {};
    return generators['generate' + typeOf(o)](o, options);
  }

  function typeOf(t) {
    t = Array.isArray(t) ? 'array' : typeof(t);
    return t.slice(0,1).toUpperCase() + t.slice(1);
  }

  var generators = {
    generateNull: function() {
      return { type: 'null' };
    },
    generateString: function(s, options) {
      return { type: 'string', enum: [s] };
    },
    generateNumber: function(n, options) {
      return { type: 'number', minimum: n, maximum: n };
    },
    generateBoolean: function(b, options) {
      return { type: 'boolean', default: b };
    },
    generateArray: function(a, options) {
      return { type: 'array', items: generators.generateArrayItems(a, options) };
    },
    generateArrayItems: function(a, options) {
      var aa = [];
      for (var i in a) {
        aa[i] = generate(a[i], options); 
      }
      return aa;
    },
    generateObject: function(o, options) {
      return { type: 'object', properties: generators.generateObjectProperties(o, options) };
    },
    generateObjectProperties: function(o, options) {
      var oo = {};
      for (var k in o) {
        oo[k] = generate(o[k], options);
      }
      return oo;
    },
    generateAnyOf: function() {
      return { anyOf: [] };
    },
    generateAllOf: function() {
      return { allOf: [] };
    },
    generateOneOf: function() {
      return { oneOf: [] };
    },
    generateNot: function() {
      return { not: {} };
    }
  };

  exports.version = '0.0.0';
  exports.generate = generate;

}));
