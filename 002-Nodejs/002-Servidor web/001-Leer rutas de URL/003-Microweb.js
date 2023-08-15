var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hola mundo desde Node.js</h1>");
    switch(req.url){
        case "/":
            res.end("Estás en la página principal");
            break;
        case "/sobremi":
            res.end("Estás en la página sobre mi");
            break;
        case "/contacto":
            res.end("Estás en la página de contacto");
            break;
        default:
            res.end("Página no encontrada");
    }
    
    console.log("Alguien ha cargado la web")
}).listen(8080)