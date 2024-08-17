// Create web server
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('comments.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('Web server is running on http://');