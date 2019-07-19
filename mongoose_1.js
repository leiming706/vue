const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})

const connect = mongoose.connection

connect.once("open",()=>{
    console.log("连接成功")
})