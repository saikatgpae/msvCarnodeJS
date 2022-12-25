const fs = require('fs');

fs.appendFile('data.json', ',{"cabType": "MUV"}', (err) => {
  if (err) throw err;
  console.log('saved!');
});