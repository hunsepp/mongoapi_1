var express = require('express')

var app = express()

var port = 8080;
app.listen(port, function(){
    console.log(`server is starting at http://localhost:${port}`)
})

app.get('/',function(request){
    console.log(request.IncomingMessage)
    // response.send("hello world.")
})