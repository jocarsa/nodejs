var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring');
var mysql = require('mysql');
var mongoose = require('mongoose');

const conexionmongoose = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    email:String
})

const Formulario = mongoose.model("Formulario",formularioSchema)

mongoose.connect(conexionmongoose,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    
})

var conexion = mysql.createConnection({
                host:"localhost",
                user:"nodejs",
                password:"nodejs",
                database:"nodejs"
            });

conexion.connect(function(err){
                if(err) throw err;
                console.log("conectado")
 })    
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})
   var rutacompleta = ruta.parse(req.url,true)
   archivos.readFile('plantillas/cabecera.html',function(err,data){
        res.write(data)
       switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
                res.write(data)
            });
            break;
        
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
                res.write(data)
            });
            break;
        case "/blog": 
            conexion.query(`
                SELECT * FROM entradas
            `,function(err,result,fields){
                if(err) throw err;
                console.log(result)
                for(let i = 0;i<result.length;i++){
                    console.log(result[i])
                    res.write(`
                        <article>
                            <h4>`+result[i].titulo+`</h4>
                            <time>`+result[i].fecha+`</time>
                            <p>`+result[i].texto+`</p>
                        </article>
                    `)
                } 
            })
           
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
                res.write(data)
            });
            break;
        case "/procesa":
            let datos = '';
               req.on('data',parte=>{
                   datos += parte.toString();
               })
               req.on('end',()=>{
                   var cadena = datos
                   var procesado = procesador.parse(cadena)
                   console.log(procesado)
                   var nnombre = procesado.nombre
                   var nasunto = procesado.asunto
                   var nemail = procesado.email
                   var nmensaje = procesado.mensaje
                   
                   var NuevoFormulario = new Formulario({
                        nombre:nnombre,
                        asunto:nasunto,
                        mensaje:nmensaje,
                        email:nemail
                    })
                   
                   NuevoFormulario.save()
                    .then(function(){
                        console.log("Insertado")
                    })
                   
               })
            
            break;
        default:
            res.end("Página no encontrada");
    } 
     archivos.readFile('plantillas/piedepagina.html',function(err,data){
        res.write(data)
         res.end("")
    });
    });
   
    if(req.url != "/favicon.ico"){
       var fecha = new Date();
    archivos.appendFile("registro.txt",fecha.getFullYear()+","+fecha.getMonth()+","+fecha.getDate()+","+fecha.getHours()+","+fecha.getMinutes()+","+fecha.getSeconds()+","+rutacompleta.host+","+rutacompleta.pathname+","+rutacompleta.search+","+req.url+"\n",function(err){
            if(err) throw err;
        })
    }
    
}).listen(8080)