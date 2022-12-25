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
  const sql = "INSERT INTO cars (Name, Type) VALUES ('Safari', 'MUV'),('Indica', 'Hatchback')";
  /* eslint-disable-next-line */
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('New data inserted');
  });
});