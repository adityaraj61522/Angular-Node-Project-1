const dbConnection =require("../config/dbConnection");
const bcryptjs = require("bcryptjs");


module.exports= async (req,res)=>{
    dbConnection.getConnection((err,connection)=>{
        if(err) throw err;
        console.log(`Connected to MySQL`);
    
        const userData = req.body;
        const password=userData.password;
        const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
        userData.password=hashedPassword;
        
        connection.query('INSERT INTO users SET ?',userData, (err, rows) => {
          if(!err){
            connection.query(`SELECT email FROM users WHERE email='${userData.email}'`, (err, em) => {
              if(!err){
                if(em.length>1){
                  res.sendStatus(300);
                  console.log("user already exist!!!")
                }else{
                  res.send(userData);
                }
              } else{
                console.log(err)
              }
            });
          } else{
            console.log(err)
          }
        });
      });

    console.log("Register is working");
}