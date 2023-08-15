var servidor = require('http');
var ruta = require('url');
var procesador = require('querystring')
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
       switch(req.url){
        case "/":
           console.log("principal");
            break;
        case "/recibe":
           console.log("recibe");
            break;
        case "/envia":
           console.log("envía");
            break;    
    }    
}).listen(8080);