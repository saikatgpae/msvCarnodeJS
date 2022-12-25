const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const q = url.parse(req.url, true).query;
  const txt = `${q.year} ${q.month} ${q.day}`;
  res.end(txt);
}).listen(8080);