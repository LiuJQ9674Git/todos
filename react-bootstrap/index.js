/**
 * Created by liujianqiang on 16/5/31.
 */
//require('./main.css');
require('!style!css!./main.css');
var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);
