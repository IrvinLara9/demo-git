// ES5 -> ES6

const http = require("http");

// Primera implementacion.
function server(request, response){
  response.writeHead(200, {"Content-Type" :  "text/html"});
  response.write("Hola mundo!!.");
  response.end();
}

// Segunda implementacion.
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" :  "text/html"});
  response.write("Hola mundo!!.");
  response.end();
}).listen(8080);

// Tercera implementacion.
function server(request, response){
  response.writeHead(200, {"Content-Type" :  "text/html"});
  response.write("Hola mundo!!.");
  response.end();
}
http.createServer((request, response) =>{
  response.writeHead(200, {"Content-Type" :  "text/html"});
  response.write("Hola mundo!!.");
  response.end();
}).listen(8080);


http.createServer(server).listen(8080);
