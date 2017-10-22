var http = require('http');
var fs = require('fs');
fs.readFileSync('index.html', function (err, html){

  if(err) throw err;
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  }).listen(process.env.PORT || 5000);
  console.log('Server currently listening...');
};
