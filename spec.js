var fs = require('fs')
  , escodegen = require('escodegen')
  , esschema = require('./esschema.json');

var nodes = Object.keys(esschema.definitions);

// skip "base", structual, enum, and source location nodes
var skip = ['Node', 'SourceLocation', 'Position', 'Function', '_Statement',
  'Statement', '_Declaration', 'Declaration', 'VariableDeclarator', 
  '_Expression', 'Expression', '_Pattern', 'Pattern', 'SwitchCase', 
  'Identifier', 'Literal', 'UnaryOperator', 'BinaryOperator', 'LogicalOperator',
  'AssignmentOperator', 'UpdateOperator', 'RegExp' ];

nodes = nodes.filter(function(x) { return skip.indexOf(x) < 0 });

function indefiniteArticle(node) {
  var word = node.toLowerCase();
  if ('aeiou'.indexOf(word[0]) >= 0)
    return 'An';
  return 'A';
}

function program() {
  var data = {
    type: "Program",
    body: []
  };
  data.body.push(xrequire('assert'));
  data.body.push(xrequire('fs'));
  data.body.push(xrequire('esprima'));
  data.body.push(xrequire('tv4'));
  data.body.push(yrequire('esschema'));
  data.body.push(validate());
  nodes.forEach(function(node) {
    data.body.push(describe(node))
  });
  return data;
}

function validate() {
  return {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "validate"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "node"
                },
                {
                    "type": "Identifier",
                    "name": "done"
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "data"
                                },
                                "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "esprima"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "parse"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "fs"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "readFileSync"
                                                }
                                            },
                                            "arguments": [
                                                {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Literal",
                                                            "value": "./test/fixtures/",
                                                            "raw": "'./test/fixtures/'"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "node"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": ".js",
                                                        "raw": "'.js'"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ],
                        "kind": "var"
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "result"
                                },
                                "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "tv4"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "validateResult"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Identifier",
                                            "name": "data"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "esschema"
                                        }
                                    ]
                                }
                            }
                        ],
                        "kind": "var"
                    },
                    {            
                      "type": "DebuggerStatement"
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "assert"
                            },
                            "arguments": [
                                {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "result"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "valid"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "done"
                            },
                            "arguments": []
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        }
}

function xrequire(name) {
  return {
    type: "VariableDeclaration",
    declarations: [
      {
        type: "VariableDeclarator",
        id: {
          type: "Identifier",
          name: name
        },
        init: {
          type: "CallExpression",
            callee: {
              type: "Identifier",
              name: "require"
            },
            arguments: [
              {
                type: "Literal",
                value: name,
                raw: "'" + name + "'"
              }
            ]
          }
        }
      ],
    kind: "var"
  }
}

function yrequire(name) {
  return {
    type: "VariableDeclaration",
    declarations: [
      {
        type: "VariableDeclarator",
        id: {
          type: "Identifier",
          name: name
        },
        init: {
          type: "CallExpression",
            callee: {
              type: "Identifier",
              name: "require"
            },
            arguments: [
              {
                type: "Literal",
                value: '../' + name + '.json',
                raw: "'../" + name + ".json'"
              }
            ]
          }
        }
      ],
    kind: "var"
  }
}

function describe(node) {
  return {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "describe"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": indefiniteArticle(node) + ' ' + node + ' node',
              "raw": "'" + indefiniteArticle(node) + ' ' + node + ' node' + "'"
            },
            {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "it"
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "should be valid against esschema.json",
                          "raw": "'should be valid against esschema.json'"
                        },
                        {
                          "type": "FunctionExpression",
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "name": "done"
                            }
                          ],
                          "defaults": [],
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                     "type": "Identifier",
                                     "name": "validate"
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": node,
                                      "raw": "'" + node + "'"
                                    },
                                    {
                                      "type": "Identifier",
                                      "name": "done"
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "rest": null,
                          "generator": false,
                          "expression": false
                        }
                      ]
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            }
          ]
        }
      };
}

fs.writeFile('./test/spec.js', escodegen.generate(program()), function(err) {
  if (err) console.log(err);
});
