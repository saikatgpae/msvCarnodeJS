const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('data.json', (err, data) => {
    res.writeHead(200, { 'content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);