const mysql = require('mysql2');

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = 'root';
const DBNAME = 'STUDENT_SCHEDULE_MANAGEMENT_SYSTEM';


const con = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DBNAME,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) {
    console.log('ERROR: '+err.code);
    console.log('FATAL: '+err.fatal);
  }
});

process.on('SIGINT', ()=>{
    con.end((err) => {
      console.clear();
      console.log('Database Disconnected');
    });
    process.exit(0);
  });

module.exports = con;