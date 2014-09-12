var module = require('module')
  , module2 = require('module2').member
  , module3 = require(3,2);

function f() {
  module.doit()
}

f();
