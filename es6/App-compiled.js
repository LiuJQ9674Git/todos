"use strict";

/**
 * Created by liujianqiang on 16/6/1.
 */
//CommonJs
var MySalute = require("./worldCommonJs");
var body = document.getElementById("app");
body.innerHTML = 'Good point: ' + MySalute;

//

var ResultMultiplyBy2 = require('./moduleBCommonJS');
console.log("ResultMultiplyBy2 is", ResultMultiplyBy2);
var resultBody = document.getElementById("appdiv");
resultBody.textContent = '乘法是: ' + ResultMultiplyBy2;

require(['./myModuleJQuery'], function (myModuleJQuery) {
  console.log("myModuleJQuery ADM");
});
//Using require to load dependencies
define(function (require) {
  var $ = require('./exportsAMD');
  $('body').text('hello world-adm');
});

//# sourceMappingURL=App-compiled.js.map