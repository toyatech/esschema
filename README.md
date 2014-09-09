esschema
========

ECMAScript (JavaScript) validation of the Mozilla 
[Parser AST](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
compatible Esprima [AST](http://esprima.org/doc/index.html#ast) via 
[JSON Schema](http://json-schema.org/).

Esschema is created and maintained by [Dusty Little](http://twitter.com/noisypebble).

### Rational

Why use a JSON Schema to validate Esprima AST when there are other more performant libraries like [Esvalidate](https://github.com/duereg/esvalidate). While Esschema can be used to validate the AST the primary purpose is to describe the AST in a format that can be read by other tools (stay tuned to [scratch.js](https://github.com/toyatech/scratchjs) for an example) 
