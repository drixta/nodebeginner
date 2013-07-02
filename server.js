var http = require("http");

http.createServer(function(request, response){
	reponse.writeHead(200, {"Content-Type": "text/plain"});
	reponse.write("Hello World");
	reponse.end();
}).listen(8888);
