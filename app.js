const express = require('express');
const app=express();
const server = require("http").createServer(app);
const bodyparser =require("body-parser");
const mysql = require('mysql');

const userRoute = require("./routing/user");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());

app.use("/api", userRoute);

// ng serve --proxy-config proxy.conf.json

// // Mysql Connection
// const dbConnection = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'root',
//   password        : '',
//   database        : 'angular-node-app'
// });


// // Register
// app.post('/api/register', (req,res) => {

//   dbConnection.getConnection((err,connection)=>{
//     if(err) throw err;
//     console.log(`Connected to MySQL`);

//     const userData = req.body;
//     console.log(req.body.email);
//     connection.query('INSERT INTO users SET ?',userData, (err, rows) => {
//       connection.release();
//       if(!err){
//         res.send(`added`)
//       } else{
//         console.log(err)
//       }
//     })
//   })
// })

// // Login 
// app.post('/api/login', (req,res) => {
//   dbConnection.getConnection((err,connection)=>{
//     if(err) throw err;
//     console.log(`Connected to MySQL`);

//     const email = req.body.email;
//     const password = req.body.password;
//     try{
//     console.log(req.body.email);
//     console.log(password);
//     connection.query('SELECT * FROM users WHERE email = ?',email, (err, rows) => {
//       connection.release();
//       if(!err){
//         if(rows[0].password==password){
//           res.send(rows);
//         }else{
//           console.log("FAiled");
//         }
//         console.log(rows[0].email)
//       } else{
//         console.log(err)
//       }
//     })
//   }catch(error){
//     console.errror(error);
//   }
//   })
// })
  
  let PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
  