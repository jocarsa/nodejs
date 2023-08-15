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
        DELETE FROM entradas
        WHERE id = 4
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha eliminado el registro")
    })
})
