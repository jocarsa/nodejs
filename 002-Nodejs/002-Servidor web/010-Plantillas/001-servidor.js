var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring')
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
            archivos.readFile('blog.html',function(err,data){
                res.write(data)
            });
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