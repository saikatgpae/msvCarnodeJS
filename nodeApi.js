const https = require('http');
const dt = require('./date');

https.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`Hello World! Now the clock is ${dt.mydate()}`);
  res.end();
}).listen(8080);