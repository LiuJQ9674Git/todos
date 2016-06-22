'use strict';

/**
 server.js
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

var findLargest = require('./routes/findlargest');

findLargest('./es6', function (er, filename) {
  if (er) return console.error(er);
  console.log('largest file was:', filename);
});

var findlargestmodulized = require('./routes/findlargestmodulized');
findlargestmodulized('./es6', function (er, filename) {
  if (er) return console.error(er);
  console.log('largest file was:', filename);
});

var findlargestasynced = require('./routes/findlargestasynced');
findlargestasynced('./es6', function (er, filename) {
  if (er) return console.error(er);
  console.log('findlargestasynced file was:', filename);
});

var Promise = require('q');
/**
var p = new Promise(function(resolve, reject) {
  resolve("hello world 北京");//
});

p.then(function(str) {
  console.log( 'then is',str);
});
**/

/**
new Promise(function(resolve, reject) {
  resolve("hello world");
})
  .then(
    function(str) {//成功
      throw new Error("uh oh");
    },
    undefined//拒绝
  )
  .then(
    undefined,//成功
    function(error) {//拒绝
      alert(error);
    }
  );
**/
// Exhibit B
/**
new Promise(function(resolve, reject) {
  resolve("hello world hi hi");
})
  .then(
    function(str) {
      console.log( 'then is',str);
      throw new Error("uh oh");
    },
    function(error) {
      console.log( 'error is',error);
      alert(error);
    }
  );
**/
//var res=function(){};
//var rej=function(){};
new Promise(function (res, rej) {
  console.log(Date.now() + " start setTimeout");
  setTimeout(res, 20);
}).then(function () {
  console.log(Date.now() + " timeout call back");
});
/**
var readFile = Q.denodeify(fs.readFile);
var promise = readFile('./es6/App.js');


var findlargestQ = require('./routes/findlargestQ');

findlargestQ('./es6')
  .then(function (filename) {
    console.log('findlargestQ file was:', filename)
  })
  .fail(function(err){
    console.error(err);
  });

**/

/**
var findlargestGenerator = require('./routes/findlargestGenerator');

findlargestGenerator('./es6').then(function (filename) {
    console.log('findlargestQ file was:', filename)
  })
  .fail(function(err){
    console.error(err);
  });
**/

var computeCommon = regeneratorRuntime.mark(function computeCommon(a, b) {
  var sum, c, d, e;
  return regeneratorRuntime.wrap(function computeCommon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sum = a + b;

          console.log(sum);
          c = a - b;

          console.log(c);
          d = a * b;

          console.log(d);
          e = a / b;

          console.log(e);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, computeCommon, this);
});

var generatorCommon = computeCommon(4, 2);
generatorCommon.next();

var compute = regeneratorRuntime.mark(function compute(a, b) {
  var sum, c, d, e;
  return regeneratorRuntime.wrap(function compute$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          sum = a + b;
          _context2.next = 3;
          return console.log(sum);

        case 3:
          c = a - b;
          _context2.next = 6;
          return console.log(c);

        case 6:
          d = a * b;
          _context2.next = 9;
          return console.log(d);

        case 9:
          e = a / b;

          console.log(e);

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, compute, this);
});

var generator = compute(4, 2);
generator.next();
generator.next();
generator.next();

var computeHello = regeneratorRuntime.mark(function computeHello(a, b) {
  var foo;
  return regeneratorRuntime.wrap(function computeHello$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return a + b;

        case 2:
          foo = _context3.sent;

          console.log(foo);

        case 4:
        case 'end':
          return _context3.stop();
      }
    }
  }, computeHello, this);
});

var generatorHello = computeHello(4, 2);
generatorHello.next();
generatorHello.next("Hello world!"); // Hello world!

fs.readFile('README.md', 'utf8', function (err, txt) {
  if (err) {
    throw err;
  }
  fs.readFile('index.js', 'utf8', function (err, content) {
    if (err) {
      throw err;
    }
    console.log(content);
  });
});

var flow = regeneratorRuntime.mark(function flow() {
  var txt, content;
  return regeneratorRuntime.wrap(function flow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fs.readFile('README.md', 'utf8');

        case 2:
          txt = _context4.sent;

          console.log('README.md', txt);
          _context4.next = 6;
          return fs.readFile('index.js', 'utf8');

        case 6:
          content = _context4.sent;

          console.log('index.js', content);

        case 8:
        case 'end':
          return _context4.stop();
      }
    }
  }, flow, this);
});

var generatorFlow = flow();
generatorFlow.next();
generatorFlow.next();

//优化的异步方法
var helper = function helper(fn) {
  return function () {
    var args = [].slice.call(arguments);
    var pass;
    args.push(function () {
      // 在回调函数中植入收集逻辑
      if (pass) {
        pass.apply(null, arguments);
      }
    });
    fn.apply(null, args);

    return function (fn) {
      // 传入一个收集函数
      pass = fn;
    };
  };
};

var readFileAsynHelpter = helper(fs.readFile);

var flowAsynHelpter = regeneratorRuntime.mark(function flowAsynHelpter() {
  var txt;
  return regeneratorRuntime.wrap(function flowAsynHelpter$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return readFileAsynHelpter('README.md', 'utf8');

        case 2:
          txt = _context5.sent;

          console.log('README.md is', txt);

        case 4:
        case 'end':
          return _context5.stop();
      }
    }
  }, flowAsynHelpter, this);
});

var generatorAsynHelpter = flowAsynHelpter();
var ret = generatorAsynHelpter.next(); // 执行readFile('file1.txt', 'utf8');
ret.value(function (err, data) {
  if (err) {
    throw err;
  }
  generatorAsynHelpter.next(data);
});

var co = function co(fn) {
  var generator = fn();
  var next = function next(data) {
    var result = generator.next(data);
    if (!result.done) {
      result.value(function (err, data) {
        if (err) {
          throw err;
        }
        next(data);
      });
    }
  };
  next();
};

co(regeneratorRuntime.mark(function _callee() {
  var txt, txt2;
  return regeneratorRuntime.wrap(function _callee$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return readFileAsynHelpter('README.md', 'utf8');

        case 2:
          txt = _context6.sent;

          console.log(txt);
          _context6.next = 6;
          return readFileAsynHelpter('index.js', 'utf8');

        case 6:
          txt2 = _context6.sent;

          console.log(txt2);

        case 8:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee, this);
}));

app.set('port', process.env.PORT || 3000);

app.use('/react', express.static(path.join(__dirname, './public')));

app.use('/bower_components', express.static(path.join(__dirname, './bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));
app.use('/app/styles', express.static(path.join(__dirname, './app/styles')));
app.use('/todos', express.static(path.join(__dirname, './app')));

app.use('/uirouter', express.static(path.join(__dirname, './ui-router')));

app.use('/nav', express.static(path.join(__dirname, './nav-router')));

app.use('/reactbboot', express.static(path.join(__dirname, './react-bootstrap')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Additional middleware which will set headers that we need on each request.
/*
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
*/

app.get('/api/comments', function (req, res) {
  fs.readFile(COMMENTS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function (req, res) {
  fs.readFile(COMMENTS_FILE, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

//# sourceMappingURL=server-compiled.js.map