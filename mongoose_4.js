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

stuModel.find({},{name:1,age:1,_id:0},(err,data)=>{
    console.log(data)
})