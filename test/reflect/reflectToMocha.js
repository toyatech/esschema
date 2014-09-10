var fs = require('fs')
  , esprima = require('esprima')
  , escodegen = require('escodegen')
  , tv4 = require('tv4');

function Program(body) { return { type: "Program", body: body } };
function FunctionDeclaration(id, params, body) {
  return {
    type: "FunctionDeclaration",
    id: id,
    params: params,
    defaults: [],
    body: body,
    rest: null,
    generator: false,
    expression: false
  }
};
function VariableDeclaration(declarations, kind) {
  return { type: "VariableDeclaration", declarations: declarations, kind: kind }
};
function VariableDeclarator(id, init) { 
  return { type: "VariableDeclarator", id: id, init: init }
}
function ExpressionStatement(expression) { 
  return { type: "ExpressionStatement", expression: expression } 
};
function CallExpression(callee, arguments) { 
  return { type: "CallExpression", callee: callee, arguments: arguments } 
};
function MemberExpression(object, property) {
  return {
    type: "MemberExpression",
    computed: false,
    object: object,
    property: property
  }
};
function LogicalExpression(operator, left, right) {
  return {
    type: "LogicalExpression",
    operator: operator,
    left: left,
    right: right
  }
};
function BinaryExpression(operator, left, right) {
  return {
    type: "BinaryExpression",
    operator: operator,
    left: left,
    right: right
  }
};
function AssignmentExpression(operator, left, right) {
  return {
    type: "AssignmentExpression",
    operator: operator,
    left: left,
    right: right
  }
};
function Identifier(name) { return { type: "Identifier", name: name } };
function Literal(value) { return { type: "Literal", value: value } };
function FunctionExpression(id, params, body) {
  return {
    type: "FunctionExpression",
    id: id,
    params: params,
    defaults: [],
    body: body,
    rest: null,
    generator: false,
    expression: false
  }
};
function IfStatement(test, consequent, alternate) {
  return {
    type: "IfStatement",
    test: test,
    alternate: alternate,
    consequent: consequent
  }
};
function BlockStatement(body) { return { type: "BlockStatement", body: body } };
function ReturnStatement(argument) { return { type: "ReturnStatement", argument: argument } };

function Describe(code) { 
  return ExpressionStatement(
    CallExpression(
      Identifier('describe'), 
      [
        Literal(code),
        FunctionExpression(
          null, 
          [],
          BlockStatement(
            [ 
              ExpressionStatement(
                CallExpression(
                  Identifier('it'),
                  [
                    Literal('should be valid against esschema.json'),
                    FunctionExpression(
                      null,
                      [ Identifier('done') ],
                      BlockStatement(
                        [
                          ExpressionStatement(
                            CallExpression(
                              Identifier('assertValid'),
                              [ 
                                Literal(code),
                                Identifier('done')
                              ]
                            )
                          )
                        ]
                      )
                    )
                  ]
                )
              )
            ]
          )
        )
      ]
    )
  )
};

var program = Program(
  [
    VariableDeclaration(
      [
        VariableDeclarator(
          Identifier('assert'),
          CallExpression(
            Identifier('require'),
            [
              Literal('assert')
            ]
          )
        ),
        VariableDeclarator(
          Identifier('esprima'),
          CallExpression(
            Identifier('require'),
            [
              Literal('esprima')
            ]
          )
        ),
        VariableDeclarator(
          Identifier('tv4'),
          CallExpression(
            Identifier('require'),
            [
              Literal('tv4')
            ]
          )
        ),
        VariableDeclarator(
          Identifier('esschema'),
          CallExpression(
            Identifier('require'),
            [
              Literal('../esschema.json')
            ]
          )
        )
      ],
      'var'
    ),
    FunctionDeclaration(
      Identifier('adjustRegexLiteral'),
      [
        Identifier('key'),
        Identifier('value')
      ],
      BlockStatement(
        [
          IfStatement(
            LogicalExpression(
              '&&',
              BinaryExpression(
                '===',
                Identifier('key'),
                Literal('value')
              ),
              BinaryExpression(
                'instanceof',
                Identifier('value'),
                Identifier('RegExp')
              )
            ),
            BlockStatement(
              ExpressionStatement(
                AssignmentExpression(
                  '=',
                  Identifier('value'),
                  CallExpression(
                    MemberExpression(
                      Identifier('value'),
                      Identifier('toString')
                    ),
                    []
                  )
                )
              )
            ),
            null
          )
        ]
      )
    ),      
    FunctionDeclaration(
      Identifier('assertValid'),
      [
        Identifier('code'),
        Identifier('done')
      ],
      BlockStatement(
        [
          VariableDeclaration(
            [
              VariableDeclarator(
                Identifier('result'),
                CallExpression(
                  MemberExpression(
                    Identifier('tv4'),
                    Identifier('validateResult')
                  ),
                  [
                    CallExpression(
                      MemberExpression(
                        Identifier('JSON'),
                        Identifier('parse')
                      ),
                      [
                        CallExpression(
                          MemberExpression(
                            Identifier('JSON'),
                            Identifier('stringify')
                          ),
                          [
                            CallExpression(
                              MemberExpression(
                                Identifier('esprima'),
                                Identifier('parse')
                              ),
                              [ Identifier('code') ]
                            ),
                            Identifier('adjustRegexLiteral')
                          ]
                        )
                      ]
                    ),
                    Identifier('esschema')
                  ]
                )
              )
            ],
            'var'
          ),
          ExpressionStatement(
            CallExpression(
              Identifier('assert'),
              [  
                MemberExpression(
                  Identifier('result'),
                  Identifier('valid')
                )
              ]
            )
          ),
          ExpressionStatement(
            CallExpression(
              Identifier('done'),
              []
            )
          )
        ]
      )
    )
  ]
);
                            
var Reflect = {
  parse: function(code) {
    var result;

    program.body.push(Describe(code));
    
    try {
      result = esprima.parse(code);
    } catch (error) {
      result = error;
    }
  
    return result;
  }
}

var Pattern = function(obj) {
  var pattern;
  pattern = JSON.parse(JSON.stringify(obj));
  pattern.assert = function() {};
  return pattern;
}

require('./reflect').testReflect(Reflect, Pattern);

//fs.writeFile('./reflect.json', JSON.stringify(program, null, 2), function(err) {
//  if (err) console.error(err);
//});

//var esschema = require('../../esschema.json');

//var result = tv4.validateResult(JSON.parse(JSON.stringify(program)), esschema);

//debugger

fs.writeFile('../reflect.js', escodegen.generate(JSON.parse(JSON.stringify(program))), function(err) {
  if (err) console.error(err);
});
//console.log(JSON.stringify(program, null, 2));

