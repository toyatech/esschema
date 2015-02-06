esschema
========

Attempts to describe the [Mozilla Parser AST](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API) compatible [Esprima AST](http://esprima.org/doc/index.html#ast) via a
[JSON Schema](http://json-schema.org/).

While the primary purpose of Esschema is to describe the AST, the [esschema.json](http://esschema/esschema.json) file can be used with JSON Schema validation libraries to validate an AST.

Esschema is created and maintained by [Dusty Little](http://twitter.com/noisypebble).

### Rational

Why use a JSON Schema to validate Esprima AST when there are other more performant libraries like [Esvalidate](https://github.com/duereg/esvalidate). While Esschema can be used to validate the AST the primary purpose is to describe the AST in a format that can be read by other tools (stay tuned to [scratch.js](https://github.com/toyatech/scratchjs) for an example) 

### Run Tests

Esschema includes a large number of tests most of which are adapted from the Mozilla Parser AST test suite itself. Execute these tests using mocha:

```
mocha -R spec
```
