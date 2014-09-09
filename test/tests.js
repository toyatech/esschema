var assert = require('assert');
var fs = require('fs');
var esprima = require('esprima');
var tv4 = require('tv4');
var esschema = require('../esschema.json');
function validate(node, done) {
    var data = esprima.parse(fs.readFileSync('./test/fixtures/' + node + '.js'));
    var result = tv4.validateResult(data, esschema);
    debugger;
    assert(result.valid);
    done();
}
describe('A Program node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('Program', done);
    });
});
describe('An EmptyStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('EmptyStatement', done);
    });
});
describe('A BlockStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('BlockStatement', done);
    });
});
describe('An ExpressionStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ExpressionStatement', done);
    });
});
describe('An IfStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('IfStatement', done);
    });
});
describe('A LabeledStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('LabeledStatement', done);
    });
});
describe('A BreakStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('BreakStatement', done);
    });
});
describe('A ContinueStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ContinueStatement', done);
    });
});
describe('A WithStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('WithStatement', done);
    });
});
describe('A SwitchStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('SwitchStatement', done);
    });
});
describe('A ReturnStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ReturnStatement', done);
    });
});
describe('A ThrowStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ThrowStatement', done);
    });
});
describe('A TryStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('TryStatement', done);
    });
});
describe('A WhileStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('WhileStatement', done);
    });
});
describe('A DoWhileStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('DoWhileStatement', done);
    });
});
describe('A ForStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ForStatement', done);
    });
});
describe('A ForInStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ForInStatement', done);
    });
});
describe('A DebuggerStatement node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('DebuggerStatement', done);
    });
});
describe('A FunctionDeclaration node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('FunctionDeclaration', done);
    });
});
describe('A VariableDeclaration node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('VariableDeclaration', done);
    });
});
describe('A ThisExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ThisExpression', done);
    });
});
describe('An ArrayExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ArrayExpression', done);
    });
});
describe('An ObjectExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ObjectExpression', done);
    });
});
describe('A FunctionExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('FunctionExpression', done);
    });
});
describe('A SequenceExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('SequenceExpression', done);
    });
});
describe('An UnaryExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('UnaryExpression', done);
    });
});
describe('A BinaryExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('BinaryExpression', done);
    });
});
describe('An AssignmentExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('AssignmentExpression', done);
    });
});
describe('An UpdateExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('UpdateExpression', done);
    });
});
describe('A LogicalExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('LogicalExpression', done);
    });
});
describe('A ConditionalExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ConditionalExpression', done);
    });
});
describe('A NewExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('NewExpression', done);
    });
});
describe('A CallExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('CallExpression', done);
    });
});
describe('A MemberExpression node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('MemberExpression', done);
    });
});
describe('An ObjectPattern node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ObjectPattern', done);
    });
});
describe('An ArrayPattern node', function () {
    it('should be valid against esschema.json', function (done) {
        validate('ArrayPattern', done);
    });
});