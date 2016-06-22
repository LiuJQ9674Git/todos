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
  if (er) return console.error(er)
    console.log('largest file was:', filename)
})


var findlargestmodulized = require('./routes/findlargestmodulized');
findlargestmodulized('./es6', function (er, filename) {
  if (er) return console.error(er)
  console.log('largest file was:', filename)
})

var findlargestasynced = require('./routes/findlargestasynced');
findlargestasynced('./es6', function (er, filename) {
  if (er) return console.error(er)
  console.log('findlargestasynced file was:', filename)
})


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
new Promise(function(res, rej) {
  console.log(Date.now() + " start setTimeout");
  setTimeout(res, 20);
}).then(function() {
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

var computeCommon = function* (a, b) {
  var sum = a + b;
  console.log(sum);
  var c = a - b;
  console.log(c);
  var d = a * b;
  console.log(d);
  var e = a / b;
  console.log(e);
};

var generatorCommon = computeCommon(4, 2);
generatorCommon.next();

var compute = function* (a, b) {
  var sum = a + b;
  yield console.log(sum);
  var c = a - b;
  yield console.log(c);
  var d = a * b;
  yield console.log(d);
  var e = a / b;
  console.log(e);
};

var generator = compute(4, 2);
generator.next();
generator.next();
generator.next();


var computeHello = function* (a, b) {
  var foo = yield a + b;
  console.log(foo);
};

var generatorHello  = computeHello (4, 2);
generatorHello .next();
generatorHello .next("Hello world!"); // Hello world!


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

var flow = function* () {
  var txt = yield fs.readFile('README.md', 'utf8');
  console.log('README.md',txt);
  var content = yield fs.readFile('index.js', 'utf8');
  console.log('index.js',content);
};

var generatorFlow  = flow();
generatorFlow.next();
generatorFlow.next();

//优化的异步方法
var helper = function (fn) {
  return function () {
    var args = [].slice.call(arguments);
    var pass;
    args.push(function () { // 在回调函数中植入收集逻辑
      if (pass) {
        pass.apply(null, arguments);
      }
    });
    fn.apply(null, args);

    return function (fn) { // 传入一个收集函数
      pass = fn;
    };
  };
};

var readFileAsynHelpter = helper(fs.readFile);

var flowAsynHelpter = function* () {
  var txt = yield readFileAsynHelpter('README.md', 'utf8');
  console.log('README.md is',txt);
};

var generatorAsynHelpter = flowAsynHelpter();
var ret = generatorAsynHelpter.next(); // 执行readFile('file1.txt', 'utf8');
ret.value(function (err, data) {
  if (err) {
    throw err;
  }
  generatorAsynHelpter.next(data);
});

var co = function (fn) {
  var generator = fn();
  var next = function (data) {
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

co(function* () {
  var txt = yield readFileAsynHelpter('README.md', 'utf8');
  console.log(txt);
  var txt2 = yield readFileAsynHelpter('index.js', 'utf8');
  console.log(txt2);
});


app.set('port', (process.env.PORT || 3000));

app.use('/react', express.static(path.join(__dirname, './public')));

app.use('/bower_components', express.static(path.join(__dirname,'./bower_components')));
app.use('/node_modules', express.static(path.join(__dirname,'./node_modules')));
app.use('/app/styles', express.static(path.join(__dirname,'./app/styles')));
app.use('/todos', express.static(path.join(__dirname,'./app')));

app.use('/uirouter', express.static(path.join(__dirname,'./ui-router')));

app.use('/nav', express.static(path.join(__dirname,'./nav-router')));

app.use('/reactbboot', express.static(path.join(__dirname,'./react-bootstrap')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
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
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
