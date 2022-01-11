var express  = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tutorial2').then(()=>{
    console.log('db connected');
    var app=express();
    app.listen(3000,()=>{
        console.log("server started");
    })
}).catch((e)=>{
    console.log("db not connected");
})