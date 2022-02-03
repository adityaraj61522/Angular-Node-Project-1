const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: "localhost",
//     user : "root",
//     password: "",
//     database: "angular-node-app",
//     multipleStatements: true
//   })
  
//   connection.connect((err)=>{
//     if(err) {
//       console.log("Not Connected");
//     }else{
//       console.log("Connected mysql");
//     }
//   })
const dbConnection = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'angular-node-app'
});

  module.exports = dbConnection;