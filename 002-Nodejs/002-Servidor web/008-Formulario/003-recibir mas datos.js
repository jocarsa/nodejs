var servidor = require('http');
var ruta = require('url');

servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})

   switch(req.url){
        case "/":
            res.write(`
                <form action="/procesa" method="POST" enctype="application/x-www-form-urlencoded">
                    <input type="text" name="nombre"><br>
                    <input type="text" name="asunto"><br>
                    <input type="email" name="email"><br>
                    <textarea name="mensaje"></textarea><br>
                    <input type="submit">
                </form>
            `)
            break;
        case "/procesa":
           let datos = '';
           req.on('data',parte=>{
               datos += parte.toString();
           })
           req.on('end',()=>{
               console.log(datos)
           })
            break;
       
    } 
    res.end("")
    
}).listen(8080)