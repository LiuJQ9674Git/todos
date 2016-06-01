/**
 * Created by liujianqiang on 16/6/2.
 */
define("alpha", ["require", "exports", "./beta"], function (require, exports, beta) {
  exports.alpha = function(argm) {
    return beta.verb("ADM Test-alpha"+argm);
    //Or:
    //return require("beta").verb();
  };
});
