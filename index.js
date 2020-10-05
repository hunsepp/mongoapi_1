var express = require('express')
var app = express()
var mongoose = require('mongoose')

require('dotenv').config()

app.use(express.urlencoded({extended:false}))


var mongo_url = process.env.MONGO_URL
mongoose.connect({ mongo_url,
    useNewUrlParser: true , 
    useUnifiedTopology: true 
    })



app.get('/',function(request,response){
    // console.log(request)
    response.send("hello world.!!!")
})

var port = process.env.PORT || 8080;


app.listen(port, function(){
    console.log(`server is starting at http://localhost:${port}`)
})
