var servidor = require('http');
var archivos = require('fs');
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})
   
   switch(req.url){
        case "/":
            archivos.readFile('inicio.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/sobremi":
            archivos.readFile('sobremi.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        default:
            res.end("Página no encontrada");
    } 
    
    
}).listen(8080)