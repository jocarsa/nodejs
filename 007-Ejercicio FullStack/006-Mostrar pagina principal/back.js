var servidor = require('http');
var ruta = require('url');
var procesador = require('querystring');
var archivos = require('fs');
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
       switch(req.url){
        case "/":
           console.log("principal");   archivos.readFile('front.html',function(err,data){
                res.end(data)
            });
            break;
        case "/recibe":
           console.log("recibe");
            break;
        case "/envia":
           console.log("envía");
            break;    
    }    
}).listen(8080);