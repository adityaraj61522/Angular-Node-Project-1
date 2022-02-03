const dbConnection = require("../config/dbConnection");

module.exports= (req,res)=>{
    dbConnection.getConnection((err,connection)=>{
        if(err) throw err;
        console.log(`Connected to MySQL`);
    connection.query("SELECT * FROM users WHERE id = ?",[req.params.id], (err, rows, fields)=>{
        if(!err){
            res.send(rows[0]);
        }else{
            console.log(err);
        }
    })
});
}
