const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('data.json', function(err, data){
        res.writeHead(200,{'content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);