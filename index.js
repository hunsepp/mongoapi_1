var express = require('express')
var app = express()
var mongoose = require('mongoose')
var apiRouter = require('./Routers/routes')
var bodyParser = require('body-parser')
require('dotenv').config()

var path = require('path')
app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api', apiRouter)

var mongo_url = process.env.MONGO_URL
mongoose.connect(mongo_url,
    {useNewUrlParser: true , 
    useUnifiedTopology: true 
    })
// app.get('/',function(request,response){
//     // console.log(request)
//     response.send("hello world.!!!")
// })

var port = process.env.PORT || 8080


app.listen(port, function(){
    console.log(`server is starting at http://localhost:${port}`)
})
