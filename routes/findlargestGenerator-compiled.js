'use strict';

/**
 * Created by liujianqiang on 16/6/20.
 */
var co = require('co');
var thunkify = require('thunkify');
var fs = require('fs');
var path = require('path');
var readdir = thunkify(fs.readdir); //[1]
var stat = thunkify(fs.stat);

module.exports = co(regeneratorRuntime.mark(function _callee(dir) {
  var files, stats, largest;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return readdir(dir);

        case 2:
          files = _context.sent;
          _context.next = 5;
          return files.map(function (file) {
            // [4]
            return stat(path.join(dir, file));
          });

        case 5:
          stats = _context.sent;
          largest = stats.filter(function (stat) {
            return stat.isFile();
          }).reduce(function (prev, next) {
            if (prev.size > next.size) return prev;
            return next;
          });
          return _context.abrupt('return', files[stats.indexOf(largest)]);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

//# sourceMappingURL=findlargestGenerator-compiled.js.map