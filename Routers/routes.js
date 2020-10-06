var express = require('express')
var router = express.Router()
var User = require('../models/contactModel')
var List = require('../models/listModel')


router.get('/',function(req,res){
    // res.send("hello world!!")
    res.render('index',{name:"박세훈"})
})

router.post('/signup',function(req,res, next){
    User.findOne({email:req.body.email}, function(err, user){
        if (err){
            return next(err)
        } else if(user) {
            return res.send("이미 유저가있습니다")
        } else{
            var contact = new User()
            contact.name = req.body.name
            contact.email = req.body.email
            contact.password = req.body.password
            contact.gender = req.body.gender
            contact.phone = req.body.phone
            contact.save(function(err){
                if(err){
                    res.json(err)
                } else {
                    res.json({
                        message : "New Contact created",
                        data:contact
                    })
                }
            })
    }})
})
    // res.send("success")
    // console.log(req.body)
router.post('/login', function(req,res, next){
    var id = req.body.id
    var password = req.body.password

    User.findOne({email:id},function(err,user){
        if (err) return next(err)
        else if(!user) return res.send("not found")
        else {
            if(user.password != password){
                res.send('비번이 틀립니다')
            } else {
                console.log(user)
                res.send(`환영합니다! ${user.name}님`)
            }
        }
    })
})
//localhost:8000/api/list 로 가면 inputList 라는 ejs 파일을 불러오게 됨.
router.get('/list',(req, res, next)=>{
    res.render('inputList')
})

//localhost:8000/api/list 로 title contents author 을 넘겨주면, .save 메소드로 데이터 저장
router.post('/list', (req,res,next)=>{
    var listContents = new List()
    listContents.title = req.body.title
    listContents.contents = req.body.contents
    listContents.author = req.body.author

    listContents.save(err=>{
        if(err) return next(err)
        else return res.send(listContents)
    })
    // console.log(req.body)
    // res.send("success")
})


//localhost:8000/api/contents 로 접속하면 정보 볼 수 있음.
router.get('/contents',(req,res, next)=>{
    List.find((err,data)=>{
        if(err) return next(err)
        else return res.json(data)
    })
})
module.exports = router;