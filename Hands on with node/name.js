var http= require('http')
var name= require('./index')
var url= require('url')
var querystring= require('querystring')


var server= http.createServer(function(req,res){
    var query= url.parse(req.url).query;
    var fname= querystring.parse(query)['faname'];
    var lname= querystring.parse(query)['lname'];


    console.log(name.fname,name.lname)
    console.log("First Name: ",name.fname);
    console.log("Last Name: ",name.lname);
}).listen(3000);
console.log("Server Started at 3000");
