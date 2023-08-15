var servidor = require('http');
var ruta = require('url');
var procesador = require('querystring');
var archivos = require('fs');
var mensajes = []
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
    console.log(req.url)
       if(req.url == "/"){
           console.log("principal");   archivos.readFile('front.html',function(err,data){
               if(err) throw err
                res.end(data)
            });
       }
        else if(req.url == "/recibe"){
           console.log("recibe");
        }else if(req.url.includes("/envia")){
           console.log("envía");
            var parametros = ruta.parse(req.url,true).query;
            console.log(parametros.mensaje)
            var fechaformateada = Date.now()
            mensajes.push({
                fecha:fechaformateada
                ,mensaje:parametros.mensaje})
            console.log(mensajes)
            res.end("")
        }   
       //res.end("")
}).listen(8080);