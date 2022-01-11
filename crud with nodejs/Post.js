var http = require('http')
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    var data1 = "";
    req.on('data',function(chunk)
    {
        console.log(chunk.toString());
        data1 += chunk;
    });
    req.on('end',function()
    {
        var name = querystring.parse(data1)['name'];
        var branch= querystring.parse(data1)['branch'];

        console.log("Name: ",name);
        console.log("Branch: ",branch);
    });
}).listen(3000);
console.log("Server started on port no. 3000!!!");