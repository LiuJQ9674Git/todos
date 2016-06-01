/**
 * Created by liujianqiang on 16/6/1.
 */
//CommonJs
var MySalute = require("./worldCommonJs");
var body = document.getElementById("app");
body.innerHTML = 'Good point: ' +MySalute;

//

var ResultMultiplyBy2 = require('./moduleBCommonJS');
console.log("ResultMultiplyBy2 is",ResultMultiplyBy2);
var resultBody = document.getElementById("appdiv");
resultBody.textContent = '乘法是: ' +ResultMultiplyBy2;

require(['./myModuleJQuery'], function(myModuleJQuery) {
  console.log("myModuleJQuery ADM");

});
//Using require to load dependencies
define(function(require) {
  var $ = require('./exportsAMD');
  //$('body').text('hello world-adm');
});

//AMD
var  alpha=require("./alpha");
alpha.alpha("test");

//AMD
require(["./alpha"], function(a) {
  var test=alpha.alpha("require aplpha ");
  var appAlpha = document.getElementById("appAlpha");
  appAlpha.innerHTML = 'Good point: ' +test;
  // ...
});

//
var req=require("./defineModule");

req.method1();
//
require( ['./defineModule'], function( defineModule){
  defineModule.method2();
  defineModule.method1();
  console.log("test");
});

