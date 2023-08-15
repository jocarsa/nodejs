var mongoose = require('mongoose');
// npm install mongoose

const conexion = 'mongodb://127.0.0.1/contacto'

mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
})