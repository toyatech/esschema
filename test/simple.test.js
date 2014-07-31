var tv4 = require('tv4');

var schema =  {
  "definitions": {
    "Node": {
      "type": "object",
      "properties": {
        "type": { "type": "string" },
        "loc": {
          "oneOf": [
            { "$ref": "#/definitions/SourceLocation" },
            { "type": "null" }
          ]
        }
      },
      "required": [ "type" ]
    },
    "SourceLocation": {
      "type": "object",
      "properties": {
        "source": {
          "oneOf": [
            { "type": "string" },
            { "type": "null" }
          ]
        },
        "start": {
          "allOf": [
            { "$ref": "#/definitions/Position" }
          ]
        },
        "end": {
          "allOf": [
            { "$ref": "#/definitions/Position" }
          ]
        }
      }
    },
    "Position": {
      "type": "object",
      "properties": {
        "line": { "type": "integer", "minimum": 1 },
        "column": { "type": "integer", "minimum": 0 }
      }
    }
  },
  "type": "object",
  "allOf": [
    { "$ref": "#/definitions/Node" }
  ],
  "properties": {
    "type": { "type": "string", "pattern": "^Program$" },
    "body": {
      "type": "array",
      "items": {
        "type": "object"
      }
    }
  }
};

var data1 = {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "answer"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "Literal",
              "value": 6,
              "raw": "6"
            },
            "right": {
              "type": "Literal",
              "value": 7,
              "raw": "7"
            }
          }
        }
      ],
      "kind": "var"
    }
  ]
};

var result = tv4.validate(data1, schema);
console.log(result);
