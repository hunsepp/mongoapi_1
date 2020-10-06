var mongoose = require('mongoose')
var listSchema = mongoose.Schema({
    title:{
        type:String
    },
    contents:{
        type:String
    },
    author:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
})
//require : true 는 무조건 값을 받아야됨, 안받으면 안됨. require: false 는 값이 없어도 됨.

var List = mongoose.model("List", listSchema)

module.exports = List
// 스키마, collection, db, database 모두 같은말