import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '$$Tester6943!!',
  database: 'games_list'
})

db.connect((err) => {
  if(err) throw err;
  console.log("Connected to MySQL");
})


export default db;