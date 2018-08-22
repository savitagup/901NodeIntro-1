//console.log("HELLO WORLD");

//console.log(process.argv);

//BABY
// var result = 0;
// for (i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }

// console.log(result);


//fs
// var fs = require('fs');

// var filename = process.argv[2];

// file = fs.readFileSync(filename);

// contents = file.toString();

// console.log(contents.split('\n').length - 1);

// var fs = require('fs');

// var filename = process.argv[2];

// file = fs.readFile(filename, function(err, data) {
//   console.log(data.toString().split('\n').length - 1);
// });

//OFFICIAL CALLBACKS
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })



// **** filtered ls
// var fs = require('fs');

// let filePath = process.argv[2];
// let extName = process.argv[3];

// fs.readdir(filePath, 'utf-8', function (err, data) {
//     if (err) throw err;

//     data.forEach(element => {
//         let temp = element.split('.');
//         let tempSplit = temp[1];
//         if (tempSplit === extName) {
//             console.log(temp[0] + '.' + temp[1]);
//         }
//     });
// });

//OFFICIAL filtered LS
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

// var lslib = require('./lslib');

// var dirname = process.argv[2];
// var ext = process.argv[3];

// lslib(dirname, ext, function(err, files) {
//   for (i = 0; i < files.length; i++) {
//     console.log(files[i]);
//   }
// });

// *** OFFICIAL modular
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// _C:\Users\Judy\AppData\Roaming\npm\node_modules\learnyounode\exercises\mak
//  e_it_modular\solution\solution_filter.js_ :


//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }

//7 of 13 http client NOT working
// var http = require('http');
// var url = process.argv[2];

// http.get(url, function(response) {
//     response.setEncoding("utf8");
//     response.on("data", console.log);
//     response.on("error", console.error);
// });

// var http  = require('http');
// var url = process.argv[2];
// http.get(url, function(res){
//   res.setEncoding('utf8');
//   res.on('data',function(data){
//     console.log(data);
//   });
//   res.on('error',function(error){
//     console.error('This is the error message:' + error);
//   });
// });

// **** http collect 8/13
// var http = require('http');

// var url = process.argv[2];

// http.get(url, function(request) {
//   var result = "";
//   request.setEncoding("utf8");
//   request.on("data", function(data) {
//     result += data;
//   });
//   request.on("end", function() {
//     console.log(result.length);
//     console.log(result);
//   });
// });

// //OFFICIAL 
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })

// 9/13 juggling async
// 3 urls

// var http = require('http');

// var urls = process.argv.slice(2);
// var results = [];

// // initialise results array
// for (i = 0; i < urls.length; i++) {
//   results[i] = null;
// }

// for (i = 0; i < urls.length; i++) {
//   (function(i) {
//     http.get(urls[i], function(request) {
//       var result = "";
//       request.setEncoding("utf8");
//       request.on("data", function(data) {
//         result += data;
//       });
//       request.on("end", function() {
//         results[i] = result;
//         var resultCount = 0;
//         for (j = 0; j < results.length; j++) {
//           if (results[j] != null) resultCount++;
//         }
//         if (resultCount == results.length) {
//           for (j = 0; j < results.length; j++) {
//             console.log(results[j]);
//           }
//         }
//       });
//     });
//   })(i);
// }

///OFFICIAL 9/13
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }

// // TIME SERVER (Exercise 10 of 13)
// var net = require('net');

// function pad(n) { return n < 10 ? '0' + n : n }

// var server = net.createServer(function(socket) {
//   d = new Date();
//   s = d.getFullYear() + "-"
//     + pad(d.getMonth() + 1) + "-"
//     + pad(d.getDate()) + " "
//     + pad(d.getHours()) + ":"
//     + pad(d.getMinutes()) + "\n";
//   socket.end(s);
// });
// server.listen(process.argv[2]);

// //OFFICIAL
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

//  HTTP FILE SERVER (Exercise 11 of 13)
// var fs = require('fs');
// var http = require('http');

// var filename = process.argv[3];

// server = http.createServer(function(request, response) {
//   fs.createReadStream(filename).pipe(response);
// });
// server.listen(process.argv[2]);

// //OFFICIAL
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))

// //HTTP UPPERCASERER (Exercise 12 of 13)
// var http = require('http');

// var map = require('through2-map');

// uc = map(function(chunk) {
//   return chunk.toString().toUpperCase();
// });

// server = http.createServer(function(request, response) {
//   if (request.method == 'POST') {
//     request.pipe(uc).pipe(response);
//   }
// });
// server.listen(process.argv[2]);

///OFFICIAL
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))

// HTTP JSON API SERVER (Exercise 13 of 13)
// var http = require('http');
// var url = require('url');

// var routes = {
//   "/api/parsetime": function(parsedUrl) {
//     d = new Date(parsedUrl.query.iso);
//     return {
//       hour: d.getHours(),
//       minute: d.getMinutes(),
//       second: d.getSeconds()
//     };
//   },
//   "/api/unixtime": function(parsedUrl) {
//     return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
//   }
// }

// server = http.createServer(function(request, response) {
//   parsedUrl = url.parse(request.url, true);
//   resource = routes[parsedUrl.pathname];
//   if (resource) {
//     response.writeHead(200, {"Content-Type": "application/json"});
//     response.end(JSON.stringify(resource(parsedUrl)));
//   }
//   else {
//     response.writeHead(404);
//     response.end();
//   }
// });
// server.listen(process.argv[2]);

//OFFICIAL
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))