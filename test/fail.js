var assert = require('assert')
  , fs = require('fs')
  , esprima = require('esprima')
  , eswalk = require('eswalk')
  , tv4 = require('tv4')
  , esschema = require('../esschema.json');
function makeTypeInvalid(type, data) {
  eswalk(data, function(node, parent) {
    if (node.type == type) {
      node.type = type + type.slice[-1];
      return data;
    }
  })
  return data; 
}
function assertInvalid(node, done) {
  var data = esprima.parse(fs.readFileSync('./test/fixtures/' + node + '.js'));
  makeTypeInvalid(node, data);
  var result = tv4.validateResult(data, esschema);
  debugger;
  assert.equal(result.valid, false);
  done();
}
describe('An invalid Program node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('Program', done);
  });
});
describe('An invalid EmptyStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('EmptyStatement', done);
  });
});
describe('An invalid BlockStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('BlockStatement', done);
  });
});
describe('An invalid ExpressionStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ExpressionStatement', done);
  });
});
describe('An invalid IfStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('IfStatement', done);
  });
});
describe('An invalid LabeledStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('LabeledStatement', done);
  });
});
describe('An invalid BreakStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('BreakStatement', done);
  });
});
describe('An invalid ContinueStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ContinueStatement', done);
  });
});
describe('An invalid WithStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('WithStatement', done);
  });
});
describe('An invalid SwitchStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('SwitchStatement', done);
  });
});
describe('An invalid ReturnStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ReturnStatement', done);
  });
});
describe('An invalid ThrowStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ThrowStatement', done);
  });
});
describe('An invalid TryStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('TryStatement', done);
  });
});
describe('An invalid WhileStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('WhileStatement', done);
  });
});
describe('An invalid DoWhileStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('DoWhileStatement', done);
  });
});
describe('An invalid ForStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ForStatement', done);
  });
});
describe('An invalid ForInStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ForInStatement', done);
  });
});
describe('An invalid DebuggerStatement node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('DebuggerStatement', done);
  });
});
describe('An invalid FunctionDeclaration node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('FunctionDeclaration', done);
  });
});
describe('An invalid VariableDeclaration node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('VariableDeclaration', done);
  });
});
describe('An invalid ThisExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ThisExpression', done);
  });
});
describe('An invalid ArrayExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ArrayExpression', done);
  });
});
describe('An invalid ObjectExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ObjectExpression', done);
  });
});
describe('An invalid FunctionExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('FunctionExpression', done);
  });
});
describe('An invalid SequenceExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('SequenceExpression', done);
  });
});
describe('An invalid UnaryExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('UnaryExpression', done);
  });
});
describe('An invalid BinaryExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('BinaryExpression', done);
  });
});
describe('An invalid AssignmentExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('AssignmentExpression', done);
  });
});
describe('An invalid UpdateExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('UpdateExpression', done);
  });
});
describe('An invalid LogicalExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('LogicalExpression', done);
  });
});
describe('An invalid ConditionalExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('ConditionalExpression', done);
  });
});
describe('An invalid NewExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('NewExpression', done);
  });
});
describe('An invalid CallExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('CallExpression', done);
  });
});
describe('An invalid MemberExpression node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('MemberExpression', done);
  });
});
describe('An invalid Property node', function () {
  it('should be invalid against esschema.json', function (done) {
    assertInvalid('Property', done);
  });
});
