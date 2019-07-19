const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})

const connect = mongoose.connection


const stuModel = mongoose.model("class10")

stuModel.find({},{},{skip:2,limit:3},(err,data)=>{
    console.log(data)
})