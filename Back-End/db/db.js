const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bqtroaufxlxnp3tzpxof-mysql.services.clever-cloud.com',
  port: '3306',
  user: 'urilddrmpmbcuz9x',
  password: 'qhaYCS5ImrUo8sI16JgD',
  database: 'bqtroaufxlxnp3tzpxof',
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});