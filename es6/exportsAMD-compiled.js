'use strict';

/**
 * Created by liujianqiang on 16/6/2.
 */
//Define a module that exports itself.
define('exportsAMD', ['jquery'], function ($) {
  var HelloWorldize = function HelloWorldize(selector) {
    console.log("selector is:", selector);
    $(selector).text('exportsAMD hello world');
  };

  return HelloWorldize;
});

//# sourceMappingURL=exportsAMD-compiled.js.map