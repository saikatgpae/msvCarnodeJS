const fs = require('fs');

fs.appendFile('data.json', ',{"cabType": "MUV"}', function(err){
    if(err) throw err;
    console.log('saved!');
});