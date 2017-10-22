var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index.html);
}).listen(process.env.PORT || 5000);
console.log('Server currently listening...');
