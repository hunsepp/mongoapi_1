var mongoose = require('mongoose')
var userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:String,
    phone:String,
    create_date:{
        type:Date,
        default:Date.now
    }
})
//require : true 는 무조건 값을 받아야됨, 안받으면 안됨. require: false 는 값이 없어도 됨.

var User = mongoose.model("User", userSchema)

module.exports = User
// 스키마, collection, db, database 모두 같은말