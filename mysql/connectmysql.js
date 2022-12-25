const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
    /* eslint-disable-next-line */
    con.query('CREATE DATABASE allcar', (err, result) => {
      if (err) {
        throw err;
      } else { console.log('Database created'); }
    });
  }
});
