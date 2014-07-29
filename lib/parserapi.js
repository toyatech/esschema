var parser = require('./parser').parser;

parser.yy = require('./scope');

var parse = exports.parse = function (input) {
  return parser.parse(input);
};

var compile = exports.compile = function (input, indent) {
  return JSON.stringify(parse(input), null, indent||"  ");
};

exports.main = function main (args) {
  var fs = require('file'), 
      cwd = fs.path(fs.cwd());

  if (!args[1]) { 
    throw new Error("Usage: " + args[0] + " FILE [OUTFILE]");
  }
  var parserapi = cwd.join(args[1]).read({charset: "UTF-8"}),
    source = compile(parserapi),
    stream = cwd.join(args[2] || fs.basename(args[1], "").open("w");
  stream.print(source).close();
};
