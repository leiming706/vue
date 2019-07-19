const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})

const connect = mongoose.connection

const Schema = mongoose.Schema 

const stuSchema = new Schema({
    name:String,
    age:Number,
    gender:String,
    national:{
        type:String,
        default:"中国"
    }
})

const stuModel = mongoose.model("student",stuSchema)

stuModel.create([{
    name:"hzg",
    age:25,
    gender:"男"

}],err=>{
    if(!err){
        console.log("创建成功")
    }
})