var archivos = require('fs');
archivos.appendFile("nuevo.txt",'Este es mi contenido',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})