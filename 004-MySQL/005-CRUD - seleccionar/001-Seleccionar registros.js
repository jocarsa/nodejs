var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"nodejs"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    conexion.query(`
        SELECT * FROM entradas
    `,function(err,result,fields){
        if(err) throw err;
        console.log(result)
    })
})
