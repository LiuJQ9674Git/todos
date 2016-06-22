"use strict";

/**
 * Created by liujianqiang on 16/6/23.
 */
var Promise = require('q');
var p1 = new Promise(function (res, rej) {
  console.log(Date.now() + " start setTimeout");
  setTimeout(res, 20);
});
p1.then(console.log);
p1.then(42);

var p2 = new Promise();
p2.then(2013);
p2.then(console.log);

//# sourceMappingURL=promisTest-compiled.js.map