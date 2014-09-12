var assert = require('assert');
var fs = require('fs');
var esprima = require('esprima');
var tv4 = require('tv4');
var esschema = require('../esschema.json');
function assertValid(node, done) {
    var data = esprima.parse(fs.readFileSync('./test/fixtures/' + node + '.js'));
    console.log(data);
    var result = tv4.validateResult(data, esschema);
    console.log(result.valid);
    debugger;
    assert(result.valid);
    done();
}
describe('A Program node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('Program', done);
    });
});
describe('An EmptyStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('EmptyStatement', done);
    });
});
describe('A BlockStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('BlockStatement', done);
    });
});
describe('An ExpressionStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ExpressionStatement', done);
    });
});
describe('An IfStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('IfStatement', done);
    });
});
describe('A LabeledStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('LabeledStatement', done);
    });
});
describe('A BreakStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('BreakStatement', done);
    });
});
describe('A ContinueStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ContinueStatement', done);
    });
});
describe('A WithStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('WithStatement', done);
    });
});
describe('A SwitchStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('SwitchStatement', done);
    });
});
describe('A ReturnStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ReturnStatement', done);
    });
});
describe('A ThrowStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ThrowStatement', done);
    });
});
describe('A TryStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('TryStatement', done);
    });
});
describe('A WhileStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('WhileStatement', done);
    });
});
describe('A DoWhileStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('DoWhileStatement', done);
    });
});
describe('A ForStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ForStatement', done);
    });
});
describe('A ForInStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ForInStatement', done);
    });
});
describe('A DebuggerStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('DebuggerStatement', done);
    });
});
describe('A FunctionDeclaration node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('FunctionDeclaration', done);
    });
});
describe('A VariableDeclaration node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('VariableDeclaration', done);
    });
});
describe('A ThisExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ThisExpression', done);
    });
});
describe('An ArrayExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ArrayExpression', done);
    });
});
describe('An ObjectExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ObjectExpression', done);
    });
});
describe('A FunctionExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('FunctionExpression', done);
    });
});
describe('A SequenceExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('SequenceExpression', done);
    });
});
describe('An UnaryExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('UnaryExpression', done);
    });
});
describe('A BinaryExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('BinaryExpression', done);
    });
});
describe('An AssignmentExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('AssignmentExpression', done);
    });
});
describe('An UpdateExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('UpdateExpression', done);
    });
});
describe('A LogicalExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('LogicalExpression', done);
    });
});
describe('A ConditionalExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('ConditionalExpression', done);
    });
});
describe('A NewExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('NewExpression', done);
    });
});
describe('A CallExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('CallExpression', done);
    });
});
describe('A MemberExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('MemberExpression', done);
    });
});
describe('A Property node', function () {
    it('should be valid against esschema.json', function (done) {
        assertValid('Property', done);
    });
});
