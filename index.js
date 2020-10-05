var express = require('express')
var port = 8080;
var app = express()
var mongoose = require('mongoose')

app.use(express.urlencoded({extended:false}))

mongoose.connect('mongodb+srv://root:1234@cluster0.oplod.mongodb.net/mydb?retryWrites=true&w=majority', { 
    useNewUrlParser: true , 
    useUnifiedTopology: true 
    })



app.get('/',function(request,response){
    // console.log(request)
    response.send("hello world.!!!")
})

app.listen(port, function(){
    console.log(`server is starting at http://localhost:${port}`)
})