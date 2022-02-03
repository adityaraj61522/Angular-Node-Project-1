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
        
        connection.query(`UPDATE users SET firstname='${userData.firstname}',lastname='${userData.lastname}',mobile='${userData.mobile}', email='${userData.email}', homeTown='${userData.hometown}', password='${userData.password}', gender='${userData.gender}', dob='${userData.dob}',l1_manager='${userData.l1_manager}', l2_manager='${userData.l2_manager}' WHERE id = ${req.params.id}`, (err, rows, fields)=>{
            if(!err){
                res.send(rows);
            }else{
                console.log(err);
            }
        });
      });

    console.log("update is working");
}