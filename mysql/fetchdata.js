const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'allcar',
  insecureAuth: true,
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');
  const sql = 'SELECT * FROM cars';
  /* eslint-disable-next-line */
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
  });
});
