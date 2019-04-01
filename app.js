var http = require('http');

var a = 5;
var b =10;
var c = a+b;

function greet(){
 var greet = " hi this is the last";
 return greet;
}

http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello !');

  res.write('Sum is '+c);

  res.write(greet());
  
  res.end();
}).listen(8080);