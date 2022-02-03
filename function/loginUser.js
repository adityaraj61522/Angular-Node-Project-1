const dbConnection =require("../config/dbConnection");
const bcryptjs = require("bcryptjs");

module.exports= async (req,res)=>{
        dbConnection.getConnection((err,connection)=>{
          if(err) throw err;
          console.log(`Connected to MySQL`);
      
          const email = req.body.email;
          const password = req.body.password;
          try{
          console.log(req.body.email);
          console.log(password);
          connection.query('SELECT * FROM users WHERE email = ?',email, (err, rows) => {
            connection.release();
            if(!err){
              let doPasswordsMatch = bcryptjs.compareSync(password, rows[0].password);
          
              console.log(rows[0].password)
              if (doPasswordsMatch){
              // if(rows[0].password==password){
                // const id = rows[0].id;
                res.send(rows[0]);
                
              }else{
                res.sendStatus(300)
              }
              console.log(rows[0].email)
            } else{
              console.log(err)
            }
          })
        }catch(error){
          console.errror(error);
        }
        })
}