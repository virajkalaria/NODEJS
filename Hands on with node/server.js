var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/html"});
res.write("hello");
res.end();
}).listen(3000);

console.log("server started on 3000");