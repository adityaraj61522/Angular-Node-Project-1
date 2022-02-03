const dbConnection = require("../config/dbConnection");

module.exports = async (req, res) => {
  try {
    const imgName ="http://localhost:3000/uploads/" + req.file.filename;
    console.log(res.file);
    console.log(imgName);
    dbConnection.getConnection((err,connection)=>{
        if(err) throw err;
        console.log(`Connected to MySQL`);
    connection.query(`UPDATE users SET img = '${imgName}' WHERE id = ${req.params.id}`, (err, rows, fields)=>{
        if(!err){
            res.send(rows[0]);
        }else{
            console.log(err);
        }
    })
});
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};
