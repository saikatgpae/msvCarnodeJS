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
  console.log('connected');
  const sql = 'CREATE TABLE cars(Id int PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(40), Type VARCHAR(20))';
  /* eslint-disable-next-line */
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Car Table created!');
  });
});