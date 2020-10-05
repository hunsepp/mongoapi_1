var express = require('express')
var router = express.Router()
var User = require('../models/contactModel')

router.get('/',function(req,res){
    // res.send("hello world!!")
    res.render('index',{name:"박세훈"})
})

router.post('/signup',function(req,res){
    console.log(req.body)
    console.log(req.body[1].name)
    console.log(req.body[0])
    res.send("success")
})

module.exports = router;