var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'utf-8'});
  res.end(index);
}).listen(process.env.PORT || 5000);
console.log('Server currently listening...');
