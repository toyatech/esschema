var assert = require('assert'), esprima = require('esprima'), tv4 = require('tv4'), esschema = require('../esschema.json');
function adjustRegexLiteral(key, value) {
    if (key === 'value' && value instanceof RegExp) {
        value = value.toString();
    }
    return value;
}
function assertValid(code, done) {
    var result = tv4.validateResult(JSON.parse(JSON.stringify(esprima.parse(code), adjustRegexLiteral)), esschema);
    assert(result.valid);
    done();
}
describe('(function(){ var x = 1, y = 2, z = 3 })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ var x = 1, y = 2, z = 3 })', done);
    });
});
describe('var x = 1, y = 2, z = 3', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('var x = 1, y = 2, z = 3', done);
    });
});
describe('(function(){ { var x = 1, y = 2, z = 3 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { var x = 1, y = 2, z = 3 } })', done);
    });
});
describe('(function(){ var x, y, z })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ var x, y, z })', done);
    });
});
describe('var x, y, z', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('var x, y, z', done);
    });
});
describe('(function(){ { var x, y, z } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { var x, y, z } })', done);
    });
});
describe('(function(){ function foo() { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function foo() { } })', done);
    });
});
describe('function foo() { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function foo() { }', done);
    });
});
describe('(function(){ { function foo() { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function foo() { } } })', done);
    });
});
describe('(function(){ function foo() { return 42 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function foo() { return 42 } })', done);
    });
});
describe('function foo() { return 42 }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function foo() { return 42 }', done);
    });
});
describe('(function(){ { function foo() { return 42 } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function foo() { return 42 } } })', done);
    });
});
describe('(function(){ function f(a) { function a() { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function f(a) { function a() { } } })', done);
    });
});
describe('function f(a) { function a() { } }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function f(a) { function a() { } }', done);
    });
});
describe('(function(){ { function f(a) { function a() { } } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function f(a) { function a() { } } } })', done);
    });
});
describe('(function(){ function f(a,b,c) { function b() { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function f(a,b,c) { function b() { } } })', done);
    });
});
describe('function f(a,b,c) { function b() { } }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function f(a,b,c) { function b() { } }', done);
    });
});
describe('(function(){ { function f(a,b,c) { function b() { } } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function f(a,b,c) { function b() { } } } })', done);
    });
});
describe('(function(){ true })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ true })', done);
    });
});
describe('true', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('true', done);
    });
});
describe('(function(){ { true } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { true } })', done);
    });
});
describe('(function(){ false })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ false })', done);
    });
});
describe('false', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('false', done);
    });
});
describe('(function(){ { false } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { false } })', done);
    });
});
describe('(function(){ 42 })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ 42 })', done);
    });
});
describe('42', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('42', done);
    });
});
describe('(function(){ { 42 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { 42 } })', done);
    });
});
describe('(function(){ (/asdf/) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (/asdf/) })', done);
    });
});
describe('(/asdf/)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(/asdf/)', done);
    });
});
describe('(function(){ { (/asdf/) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (/asdf/) } })', done);
    });
});
describe('(function(){ this })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ this })', done);
    });
});
describe('this', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('this', done);
    });
});
describe('(function(){ { this } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { this } })', done);
    });
});
describe('(function(){ foo })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ foo })', done);
    });
});
describe('foo', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('foo', done);
    });
});
describe('(function(){ { foo } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { foo } })', done);
    });
});
describe('(function(){ foo.bar })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ foo.bar })', done);
    });
});
describe('foo.bar', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('foo.bar', done);
    });
});
describe('(function(){ { foo.bar } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { foo.bar } })', done);
    });
});
describe('(function(){ foo[bar] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ foo[bar] })', done);
    });
});
describe('foo[bar]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('foo[bar]', done);
    });
});
describe('(function(){ { foo[bar] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { foo[bar] } })', done);
    });
});
describe('(function(){ (function(){}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (function(){}) })', done);
    });
});
describe('(function(){})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){})', done);
    });
});
describe('(function(){ { (function(){}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (function(){}) } })', done);
    });
});
describe('(function(){ (function f() {}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (function f() {}) })', done);
    });
});
describe('(function f() {})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function f() {})', done);
    });
});
describe('(function(){ { (function f() {}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (function f() {}) } })', done);
    });
});
describe('(function(){ (function f(x,y,z) {}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (function f(x,y,z) {}) })', done);
    });
});
describe('(function f(x,y,z) {})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function f(x,y,z) {})', done);
    });
});
describe('(function(){ { (function f(x,y,z) {}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (function f(x,y,z) {}) } })', done);
    });
});
describe('(function(){ (++x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (++x) })', done);
    });
});
describe('(++x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(++x)', done);
    });
});
describe('(function(){ { (++x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (++x) } })', done);
    });
});
describe('(function(){ (x++) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x++) })', done);
    });
});
describe('(x++)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x++)', done);
    });
});
describe('(function(){ { (x++) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x++) } })', done);
    });
});
describe('(function(){ (+x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (+x) })', done);
    });
});
describe('(+x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(+x)', done);
    });
});
describe('(function(){ { (+x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (+x) } })', done);
    });
});
describe('(function(){ (-x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (-x) })', done);
    });
});
describe('(-x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(-x)', done);
    });
});
describe('(function(){ { (-x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (-x) } })', done);
    });
});
describe('(function(){ (!x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (!x) })', done);
    });
});
describe('(!x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(!x)', done);
    });
});
describe('(function(){ { (!x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (!x) } })', done);
    });
});
describe('(function(){ (~x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (~x) })', done);
    });
});
describe('(~x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(~x)', done);
    });
});
describe('(function(){ { (~x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (~x) } })', done);
    });
});
describe('(function(){ (delete x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (delete x) })', done);
    });
});
describe('(delete x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(delete x)', done);
    });
});
describe('(function(){ { (delete x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (delete x) } })', done);
    });
});
describe('(function(){ (typeof x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (typeof x) })', done);
    });
});
describe('(typeof x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(typeof x)', done);
    });
});
describe('(function(){ { (typeof x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (typeof x) } })', done);
    });
});
describe('(function(){ (void x) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (void x) })', done);
    });
});
describe('(void x)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(void x)', done);
    });
});
describe('(function(){ { (void x) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (void x) } })', done);
    });
});
describe('(function(){ (x == y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x == y) })', done);
    });
});
describe('(x == y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x == y)', done);
    });
});
describe('(function(){ { (x == y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x == y) } })', done);
    });
});
describe('(function(){ (x != y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x != y) })', done);
    });
});
describe('(x != y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x != y)', done);
    });
});
describe('(function(){ { (x != y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x != y) } })', done);
    });
});
describe('(function(){ (x === y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x === y) })', done);
    });
});
describe('(x === y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x === y)', done);
    });
});
describe('(function(){ { (x === y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x === y) } })', done);
    });
});
describe('(function(){ (x !== y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x !== y) })', done);
    });
});
describe('(x !== y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x !== y)', done);
    });
});
describe('(function(){ { (x !== y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x !== y) } })', done);
    });
});
describe('(function(){ (x < y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x < y) })', done);
    });
});
describe('(x < y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x < y)', done);
    });
});
describe('(function(){ { (x < y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x < y) } })', done);
    });
});
describe('(function(){ (x <= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x <= y) })', done);
    });
});
describe('(x <= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x <= y)', done);
    });
});
describe('(function(){ { (x <= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x <= y) } })', done);
    });
});
describe('(function(){ (x > y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x > y) })', done);
    });
});
describe('(x > y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x > y)', done);
    });
});
describe('(function(){ { (x > y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x > y) } })', done);
    });
});
describe('(function(){ (x >= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x >= y) })', done);
    });
});
describe('(x >= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x >= y)', done);
    });
});
describe('(function(){ { (x >= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x >= y) } })', done);
    });
});
describe('(function(){ (x << y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x << y) })', done);
    });
});
describe('(x << y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x << y)', done);
    });
});
describe('(function(){ { (x << y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x << y) } })', done);
    });
});
describe('(function(){ (x >> y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x >> y) })', done);
    });
});
describe('(x >> y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x >> y)', done);
    });
});
describe('(function(){ { (x >> y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x >> y) } })', done);
    });
});
describe('(function(){ (x >>> y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x >>> y) })', done);
    });
});
describe('(x >>> y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x >>> y)', done);
    });
});
describe('(function(){ { (x >>> y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x >>> y) } })', done);
    });
});
describe('(function(){ (x + y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x + y) })', done);
    });
});
describe('(x + y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x + y)', done);
    });
});
describe('(function(){ { (x + y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x + y) } })', done);
    });
});
describe('(function(){ (w + x + y + z) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (w + x + y + z) })', done);
    });
});
describe('(w + x + y + z)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(w + x + y + z)', done);
    });
});
describe('(function(){ { (w + x + y + z) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (w + x + y + z) } })', done);
    });
});
describe('(function(){ (x - y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x - y) })', done);
    });
});
describe('(x - y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x - y)', done);
    });
});
describe('(function(){ { (x - y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x - y) } })', done);
    });
});
describe('(function(){ (w - x - y - z) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (w - x - y - z) })', done);
    });
});
describe('(w - x - y - z)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(w - x - y - z)', done);
    });
});
describe('(function(){ { (w - x - y - z) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (w - x - y - z) } })', done);
    });
});
describe('(function(){ (x * y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x * y) })', done);
    });
});
describe('(x * y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x * y)', done);
    });
});
describe('(function(){ { (x * y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x * y) } })', done);
    });
});
describe('(function(){ (x / y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x / y) })', done);
    });
});
describe('(x / y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x / y)', done);
    });
});
describe('(function(){ { (x / y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x / y) } })', done);
    });
});
describe('(function(){ (x % y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x % y) })', done);
    });
});
describe('(x % y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x % y)', done);
    });
});
describe('(function(){ { (x % y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x % y) } })', done);
    });
});
describe('(function(){ (x | y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x | y) })', done);
    });
});
describe('(x | y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x | y)', done);
    });
});
describe('(function(){ { (x | y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x | y) } })', done);
    });
});
describe('(function(){ (x ^ y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x ^ y) })', done);
    });
});
describe('(x ^ y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x ^ y)', done);
    });
});
describe('(function(){ { (x ^ y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x ^ y) } })', done);
    });
});
describe('(function(){ (x & y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x & y) })', done);
    });
});
describe('(x & y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x & y)', done);
    });
});
describe('(function(){ { (x & y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x & y) } })', done);
    });
});
describe('(function(){ (x in y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x in y) })', done);
    });
});
describe('(x in y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x in y)', done);
    });
});
describe('(function(){ { (x in y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x in y) } })', done);
    });
});
describe('(function(){ (x instanceof y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x instanceof y) })', done);
    });
});
describe('(x instanceof y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x instanceof y)', done);
    });
});
describe('(function(){ { (x instanceof y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x instanceof y) } })', done);
    });
});
describe('(function(){ (x = y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x = y) })', done);
    });
});
describe('(x = y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x = y)', done);
    });
});
describe('(function(){ { (x = y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x = y) } })', done);
    });
});
describe('(function(){ (x += y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x += y) })', done);
    });
});
describe('(x += y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x += y)', done);
    });
});
describe('(function(){ { (x += y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x += y) } })', done);
    });
});
describe('(function(){ (x -= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x -= y) })', done);
    });
});
describe('(x -= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x -= y)', done);
    });
});
describe('(function(){ { (x -= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x -= y) } })', done);
    });
});
describe('(function(){ (x *= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x *= y) })', done);
    });
});
describe('(x *= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x *= y)', done);
    });
});
describe('(function(){ { (x *= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x *= y) } })', done);
    });
});
describe('(function(){ (x /= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x /= y) })', done);
    });
});
describe('(x /= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x /= y)', done);
    });
});
describe('(function(){ { (x /= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x /= y) } })', done);
    });
});
describe('(function(){ (x %= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x %= y) })', done);
    });
});
describe('(x %= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x %= y)', done);
    });
});
describe('(function(){ { (x %= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x %= y) } })', done);
    });
});
describe('(function(){ (x <<= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x <<= y) })', done);
    });
});
describe('(x <<= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x <<= y)', done);
    });
});
describe('(function(){ { (x <<= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x <<= y) } })', done);
    });
});
describe('(function(){ (x >>= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x >>= y) })', done);
    });
});
describe('(x >>= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x >>= y)', done);
    });
});
describe('(function(){ { (x >>= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x >>= y) } })', done);
    });
});
describe('(function(){ (x >>>= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x >>>= y) })', done);
    });
});
describe('(x >>>= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x >>>= y)', done);
    });
});
describe('(function(){ { (x >>>= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x >>>= y) } })', done);
    });
});
describe('(function(){ (x |= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x |= y) })', done);
    });
});
describe('(x |= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x |= y)', done);
    });
});
describe('(function(){ { (x |= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x |= y) } })', done);
    });
});
describe('(function(){ (x ^= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x ^= y) })', done);
    });
});
describe('(x ^= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x ^= y)', done);
    });
});
describe('(function(){ { (x ^= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x ^= y) } })', done);
    });
});
describe('(function(){ (x &= y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x &= y) })', done);
    });
});
describe('(x &= y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x &= y)', done);
    });
});
describe('(function(){ { (x &= y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x &= y) } })', done);
    });
});
describe('(function(){ (x || y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x || y) })', done);
    });
});
describe('(x || y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x || y)', done);
    });
});
describe('(function(){ { (x || y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x || y) } })', done);
    });
});
describe('(function(){ (x && y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x && y) })', done);
    });
});
describe('(x && y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x && y)', done);
    });
});
describe('(function(){ { (x && y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x && y) } })', done);
    });
});
describe('(function(){ (w || x || y || z) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (w || x || y || z) })', done);
    });
});
describe('(w || x || y || z)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(w || x || y || z)', done);
    });
});
describe('(function(){ { (w || x || y || z) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (w || x || y || z) } })', done);
    });
});
describe('(function(){ (x ? y : z) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x ? y : z) })', done);
    });
});
describe('(x ? y : z)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x ? y : z)', done);
    });
});
describe('(function(){ { (x ? y : z) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x ? y : z) } })', done);
    });
});
describe('(function(){ (x,y) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x,y) })', done);
    });
});
describe('(x,y)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x,y)', done);
    });
});
describe('(function(){ { (x,y) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x,y) } })', done);
    });
});
describe('(function(){ (x,y,z) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (x,y,z) })', done);
    });
});
describe('(x,y,z)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(x,y,z)', done);
    });
});
describe('(function(){ { (x,y,z) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (x,y,z) } })', done);
    });
});
describe('(function(){ (a,b,c,d,e,f,g) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (a,b,c,d,e,f,g) })', done);
    });
});
describe('(a,b,c,d,e,f,g)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(a,b,c,d,e,f,g)', done);
    });
});
describe('(function(){ { (a,b,c,d,e,f,g) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (a,b,c,d,e,f,g) } })', done);
    });
});
describe('(function(){ (new Object) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (new Object) })', done);
    });
});
describe('(new Object)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(new Object)', done);
    });
});
describe('(function(){ { (new Object) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (new Object) } })', done);
    });
});
describe('(function(){ (new Object()) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (new Object()) })', done);
    });
});
describe('(new Object())', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(new Object())', done);
    });
});
describe('(function(){ { (new Object()) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (new Object()) } })', done);
    });
});
describe('(function(){ (new Object(42)) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (new Object(42)) })', done);
    });
});
describe('(new Object(42))', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(new Object(42))', done);
    });
});
describe('(function(){ { (new Object(42)) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (new Object(42)) } })', done);
    });
});
describe('(function(){ (new Object(1,2,3)) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (new Object(1,2,3)) })', done);
    });
});
describe('(new Object(1,2,3))', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(new Object(1,2,3))', done);
    });
});
describe('(function(){ { (new Object(1,2,3)) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (new Object(1,2,3)) } })', done);
    });
});
describe('(function(){ (String()) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (String()) })', done);
    });
});
describe('(String())', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(String())', done);
    });
});
describe('(function(){ { (String()) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (String()) } })', done);
    });
});
describe('(function(){ (String(42)) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (String(42)) })', done);
    });
});
describe('(String(42))', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(String(42))', done);
    });
});
describe('(function(){ { (String(42)) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (String(42)) } })', done);
    });
});
describe('(function(){ (String(1,2,3)) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ (String(1,2,3)) })', done);
    });
});
describe('(String(1,2,3))', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(String(1,2,3))', done);
    });
});
describe('(function(){ { (String(1,2,3)) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { (String(1,2,3)) } })', done);
    });
});
describe('(function(){ [] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [] })', done);
    });
});
describe('[]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[]', done);
    });
});
describe('(function(){ { [] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [] } })', done);
    });
});
describe('(function(){ [1] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1] })', done);
    });
});
describe('[1]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1]', done);
    });
});
describe('(function(){ { [1] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1] } })', done);
    });
});
describe('(function(){ [1,2] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,2] })', done);
    });
});
describe('[1,2]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,2]', done);
    });
});
describe('(function(){ { [1,2] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,2] } })', done);
    });
});
describe('(function(){ [1,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,2,3] })', done);
    });
});
describe('[1,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,2,3]', done);
    });
});
describe('(function(){ { [1,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,2,3] } })', done);
    });
});
describe('(function(){ [1,,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,,2,3] })', done);
    });
});
describe('[1,,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,,2,3]', done);
    });
});
describe('(function(){ { [1,,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,,2,3] } })', done);
    });
});
describe('(function(){ [1,,,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,,,2,3] })', done);
    });
});
describe('[1,,,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,,,2,3]', done);
    });
});
describe('(function(){ { [1,,,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,,,2,3] } })', done);
    });
});
describe('(function(){ [1,,,2,,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,,,2,,3] })', done);
    });
});
describe('[1,,,2,,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,,,2,,3]', done);
    });
});
describe('(function(){ { [1,,,2,,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,,,2,,3] } })', done);
    });
});
describe('(function(){ [1,,,2,,,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [1,,,2,,,3] })', done);
    });
});
describe('[1,,,2,,,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[1,,,2,,,3]', done);
    });
});
describe('(function(){ { [1,,,2,,,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [1,,,2,,,3] } })', done);
    });
});
describe('(function(){ [,1,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,1,2,3] })', done);
    });
});
describe('[,1,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,1,2,3]', done);
    });
});
describe('(function(){ { [,1,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,1,2,3] } })', done);
    });
});
describe('(function(){ [,,1,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,1,2,3] })', done);
    });
});
describe('[,,1,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,1,2,3]', done);
    });
});
describe('(function(){ { [,,1,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,1,2,3] } })', done);
    });
});
describe('(function(){ [,,,1,2,3] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,,1,2,3] })', done);
    });
});
describe('[,,,1,2,3]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,,1,2,3]', done);
    });
});
describe('(function(){ { [,,,1,2,3] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,,1,2,3] } })', done);
    });
});
describe('(function(){ [,,,1,2,3,] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,,1,2,3,] })', done);
    });
});
describe('[,,,1,2,3,]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,,1,2,3,]', done);
    });
});
describe('(function(){ { [,,,1,2,3,] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,,1,2,3,] } })', done);
    });
});
describe('(function(){ [,,,1,2,3,,] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,,1,2,3,,] })', done);
    });
});
describe('[,,,1,2,3,,]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,,1,2,3,,]', done);
    });
});
describe('(function(){ { [,,,1,2,3,,] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,,1,2,3,,] } })', done);
    });
});
describe('(function(){ [,,,1,2,3,,,] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,,1,2,3,,,] })', done);
    });
});
describe('[,,,1,2,3,,,]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,,1,2,3,,,]', done);
    });
});
describe('(function(){ { [,,,1,2,3,,,] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,,1,2,3,,,] } })', done);
    });
});
describe('(function(){ [,,,,,] })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ [,,,,,] })', done);
    });
});
describe('[,,,,,]', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('[,,,,,]', done);
    });
});
describe('(function(){ { [,,,,,] } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { [,,,,,] } })', done);
    });
});
describe('(function(){ ({}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({}) })', done);
    });
});
describe('({})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({})', done);
    });
});
describe('(function(){ { ({}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({}) } })', done);
    });
});
describe('(function(){ ({x:1}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({x:1}) })', done);
    });
});
describe('({x:1})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({x:1})', done);
    });
});
describe('(function(){ { ({x:1}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({x:1}) } })', done);
    });
});
describe('(function(){ ({x:1, y:2}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({x:1, y:2}) })', done);
    });
});
describe('({x:1, y:2})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({x:1, y:2})', done);
    });
});
describe('(function(){ { ({x:1, y:2}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({x:1, y:2}) } })', done);
    });
});
describe('(function(){ ({x:1, y:2, z:3}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({x:1, y:2, z:3}) })', done);
    });
});
describe('({x:1, y:2, z:3})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({x:1, y:2, z:3})', done);
    });
});
describe('(function(){ { ({x:1, y:2, z:3}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({x:1, y:2, z:3}) } })', done);
    });
});
describe('(function(){ ({x:1, \'y\':2, z:3}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({x:1, \'y\':2, z:3}) })', done);
    });
});
describe('({x:1, \'y\':2, z:3})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({x:1, \'y\':2, z:3})', done);
    });
});
describe('(function(){ { ({x:1, \'y\':2, z:3}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({x:1, \'y\':2, z:3}) } })', done);
    });
});
describe('(function(){ ({\'x\':1, \'y\':2, z:3}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({\'x\':1, \'y\':2, z:3}) })', done);
    });
});
describe('({\'x\':1, \'y\':2, z:3})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({\'x\':1, \'y\':2, z:3})', done);
    });
});
describe('(function(){ { ({\'x\':1, \'y\':2, z:3}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({\'x\':1, \'y\':2, z:3}) } })', done);
    });
});
describe('(function(){ ({\'x\':1, \'y\':2, 3:3}) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({\'x\':1, \'y\':2, 3:3}) })', done);
    });
});
describe('({\'x\':1, \'y\':2, 3:3})', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({\'x\':1, \'y\':2, 3:3})', done);
    });
});
describe('(function(){ { ({\'x\':1, \'y\':2, 3:3}) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({\'x\':1, \'y\':2, 3:3}) } })', done);
    });
});
describe('(function(){ 2 + 3 })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ 2 + 3 })', done);
    });
});
describe('2 + 3', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('2 + 3', done);
    });
});
describe('(function(){ { 2 + 3 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { 2 + 3 } })', done);
    });
});
describe('(function(){ typeof(0?0:a) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ typeof(0?0:a) })', done);
    });
});
describe('typeof(0?0:a)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('typeof(0?0:a)', done);
    });
});
describe('(function(){ { typeof(0?0:a) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { typeof(0?0:a) } })', done);
    });
});
describe('f; if (1) function f(){}', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('f; if (1) function f(){}', done);
    });
});
describe('(function(){ throw 42 })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ throw 42 })', done);
    });
});
describe('throw 42', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('throw 42', done);
    });
});
describe('(function(){ { throw 42 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { throw 42 } })', done);
    });
});
describe('(function(){ for (;;) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (;;) break })', done);
    });
});
describe('for (;;) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (;;) break', done);
    });
});
describe('(function(){ { for (;;) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (;;) break } })', done);
    });
});
describe('(function(){ for (x; y; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (x; y; z) break })', done);
    });
});
describe('for (x; y; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (x; y; z) break', done);
    });
});
describe('(function(){ { for (x; y; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (x; y; z) break } })', done);
    });
});
describe('(function(){ for (var x; y; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x; y; z) break })', done);
    });
});
describe('for (var x; y; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x; y; z) break', done);
    });
});
describe('(function(){ { for (var x; y; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x; y; z) break } })', done);
    });
});
describe('(function(){ for (var x = 42; y; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x = 42; y; z) break })', done);
    });
});
describe('for (var x = 42; y; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x = 42; y; z) break', done);
    });
});
describe('(function(){ { for (var x = 42; y; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x = 42; y; z) break } })', done);
    });
});
describe('(function(){ for (x; ; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (x; ; z) break })', done);
    });
});
describe('for (x; ; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (x; ; z) break', done);
    });
});
describe('(function(){ { for (x; ; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (x; ; z) break } })', done);
    });
});
describe('(function(){ for (var x; ; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x; ; z) break })', done);
    });
});
describe('for (var x; ; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x; ; z) break', done);
    });
});
describe('(function(){ { for (var x; ; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x; ; z) break } })', done);
    });
});
describe('(function(){ for (var x = 42; ; z) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x = 42; ; z) break })', done);
    });
});
describe('for (var x = 42; ; z) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x = 42; ; z) break', done);
    });
});
describe('(function(){ { for (var x = 42; ; z) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x = 42; ; z) break } })', done);
    });
});
describe('(function(){ for (x; y; ) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (x; y; ) break })', done);
    });
});
describe('for (x; y; ) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (x; y; ) break', done);
    });
});
describe('(function(){ { for (x; y; ) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (x; y; ) break } })', done);
    });
});
describe('(function(){ for (var x; y; ) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x; y; ) break })', done);
    });
});
describe('for (var x; y; ) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x; y; ) break', done);
    });
});
describe('(function(){ { for (var x; y; ) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x; y; ) break } })', done);
    });
});
describe('(function(){ for (var x = 42; y; ) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x = 42; y; ) break })', done);
    });
});
describe('for (var x = 42; y; ) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x = 42; y; ) break', done);
    });
});
describe('(function(){ { for (var x = 42; y; ) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x = 42; y; ) break } })', done);
    });
});
describe('(function(){ for (var x in y) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (var x in y) break })', done);
    });
});
describe('for (var x in y) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (var x in y) break', done);
    });
});
describe('(function(){ { for (var x in y) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (var x in y) break } })', done);
    });
});
describe('(function(){ for (x in y) break })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ for (x in y) break })', done);
    });
});
describe('for (x in y) break', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('for (x in y) break', done);
    });
});
describe('(function(){ { for (x in y) break } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { for (x in y) break } })', done);
    });
});
describe('(function(){ { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { } })', done);
    });
});
describe('{ }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('{ }', done);
    });
});
describe('(function(){ { { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { { } } })', done);
    });
});
describe('(function(){ { throw 1; throw 2; throw 3; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { throw 1; throw 2; throw 3; } })', done);
    });
});
describe('{ throw 1; throw 2; throw 3; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('{ throw 1; throw 2; throw 3; }', done);
    });
});
describe('(function(){ { { throw 1; throw 2; throw 3; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { { throw 1; throw 2; throw 3; } } })', done);
    });
});
describe('(function(){ ; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ; })', done);
    });
});
describe(';', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid(';', done);
    });
});
describe('(function(){ { ; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ; } })', done);
    });
});
describe('(function(){ if (foo) throw 42; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ if (foo) throw 42; })', done);
    });
});
describe('if (foo) throw 42;', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('if (foo) throw 42;', done);
    });
});
describe('(function(){ { if (foo) throw 42; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { if (foo) throw 42; } })', done);
    });
});
describe('(function(){ if (foo) throw 42; else true; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ if (foo) throw 42; else true; })', done);
    });
});
describe('if (foo) throw 42; else true;', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('if (foo) throw 42; else true;', done);
    });
});
describe('(function(){ { if (foo) throw 42; else true; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { if (foo) throw 42; else true; } })', done);
    });
});
describe('(function(){ if (foo) { throw 1; throw 2; throw 3; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ if (foo) { throw 1; throw 2; throw 3; } })', done);
    });
});
describe('if (foo) { throw 1; throw 2; throw 3; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('if (foo) { throw 1; throw 2; throw 3; }', done);
    });
});
describe('(function(){ { if (foo) { throw 1; throw 2; throw 3; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { if (foo) { throw 1; throw 2; throw 3; } } })', done);
    });
});
describe('(function(){ if (foo) { throw 1; throw 2; throw 3; } else true; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ if (foo) { throw 1; throw 2; throw 3; } else true; })', done);
    });
});
describe('if (foo) { throw 1; throw 2; throw 3; } else true;', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('if (foo) { throw 1; throw 2; throw 3; } else true;', done);
    });
});
describe('(function(){ { if (foo) { throw 1; throw 2; throw 3; } else true; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { if (foo) { throw 1; throw 2; throw 3; } else true; } })', done);
    });
});
describe('(function(){ foo: for(;;) break foo; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ foo: for(;;) break foo; })', done);
    });
});
describe('foo: for(;;) break foo;', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('foo: for(;;) break foo;', done);
    });
});
describe('(function(){ { foo: for(;;) break foo; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { foo: for(;;) break foo; } })', done);
    });
});
describe('(function(){ foo: for(;;) continue foo; })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ foo: for(;;) continue foo; })', done);
    });
});
describe('foo: for(;;) continue foo;', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('foo: for(;;) continue foo;', done);
    });
});
describe('(function(){ { foo: for(;;) continue foo; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { foo: for(;;) continue foo; } })', done);
    });
});
describe('(function(){ with (obj) { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ with (obj) { } })', done);
    });
});
describe('with (obj) { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('with (obj) { }', done);
    });
});
describe('(function(){ { with (obj) { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { with (obj) { } } })', done);
    });
});
describe('(function(){ with (obj) { obj; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ with (obj) { obj; } })', done);
    });
});
describe('with (obj) { obj; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('with (obj) { obj; }', done);
    });
});
describe('(function(){ { with (obj) { obj; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { with (obj) { obj; } } })', done);
    });
});
describe('(function(){ while (foo) { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ while (foo) { } })', done);
    });
});
describe('while (foo) { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('while (foo) { }', done);
    });
});
describe('(function(){ { while (foo) { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { while (foo) { } } })', done);
    });
});
describe('(function(){ while (foo) { foo; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ while (foo) { foo; } })', done);
    });
});
describe('while (foo) { foo; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('while (foo) { foo; }', done);
    });
});
describe('(function(){ { while (foo) { foo; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { while (foo) { foo; } } })', done);
    });
});
describe('(function(){ do { } while (foo); })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ do { } while (foo); })', done);
    });
});
describe('do { } while (foo);', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('do { } while (foo);', done);
    });
});
describe('(function(){ { do { } while (foo); } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { do { } while (foo); } })', done);
    });
});
describe('(function(){ do { foo; } while (foo) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ do { foo; } while (foo) })', done);
    });
});
describe('do { foo; } while (foo)', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('do { foo; } while (foo)', done);
    });
});
describe('(function(){ { do { foo; } while (foo) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { do { foo; } while (foo) } })', done);
    });
});
describe('(function(){ switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; } })', done);
    });
});
describe('switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; }', done);
    });
});
describe('(function(){ { switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; } } })', done);
    });
});
describe('(function(){ switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; } })', done);
    });
});
describe('switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; }', done);
    });
});
describe('(function(){ { switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { switch (foo) { case 1: 1; break; case 2: 2; break; default: 3; case 42: 42; } } })', done);
    });
});
describe('(function(){ try { } catch (e) { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ try { } catch (e) { } })', done);
    });
});
describe('try { } catch (e) { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('try { } catch (e) { }', done);
    });
});
describe('(function(){ { try { } catch (e) { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { try { } catch (e) { } } })', done);
    });
});
describe('(function(){ try { } catch (e) { } finally { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ try { } catch (e) { } finally { } })', done);
    });
});
describe('try { } catch (e) { } finally { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('try { } catch (e) { } finally { }', done);
    });
});
describe('(function(){ { try { } catch (e) { } finally { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { try { } catch (e) { } finally { } } })', done);
    });
});
describe('(function(){ try { } finally { } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ try { } finally { } })', done);
    });
});
describe('try { } finally { }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('try { } finally { }', done);
    });
});
describe('(function(){ { try { } finally { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { try { } finally { } } })', done);
    });
});
describe('(function(){ function f() { function g() { } function g() { } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function f() { function g() { } function g() { } } })', done);
    });
});
describe('function f() { function g() { } function g() { } }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function f() { function g() { } function g() { } }', done);
    });
});
describe('(function(){ { function f() { function g() { } function g() { } } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function f() { function g() { } function g() { } } } })', done);
    });
});
describe('(function(){ function f() { function g() { } function g() { return 42 } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function f() { function g() { } function g() { return 42 } } })', done);
    });
});
describe('function f() { function g() { } function g() { return 42 } }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function f() { function g() { } function g() { return 42 } }', done);
    });
});
describe('(function(){ { function f() { function g() { } function g() { return 42 } } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function f() { function g() { } function g() { return 42 } } } })', done);
    });
});
describe('(function(){ function f() { var x = 42; var x = 43; } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ function f() { var x = 42; var x = 43; } })', done);
    });
});
describe('function f() { var x = 42; var x = 43; }', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('function f() { var x = 42; var x = 43; }', done);
    });
});
describe('(function(){ { function f() { var x = 42; var x = 43; } } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { function f() { var x = 42; var x = 43; } } })', done);
    });
});
describe('(function(){ ({ get x() { return 42 } }) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({ get x() { return 42 } }) })', done);
    });
});
describe('({ get x() { return 42 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({ get x() { return 42 } })', done);
    });
});
describe('(function(){ { ({ get x() { return 42 } }) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({ get x() { return 42 } }) } })', done);
    });
});
describe('(function(){ ({ set x(v) { return 42 } }) })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ ({ set x(v) { return 42 } }) })', done);
    });
});
describe('({ set x(v) { return 42 } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('({ set x(v) { return 42 } })', done);
    });
});
describe('(function(){ { ({ set x(v) { return 42 } }) } })', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('(function(){ { ({ set x(v) { return 42 } }) } })', done);
    });
});
