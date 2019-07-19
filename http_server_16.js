const http = require("http")
const url = require("url")

http.createServer( (request,response)=>{
   let postData = ""
    request.on("data",(_post)=>{
        postData += _post

    })

    request.on("end",()=>{
        console.log("post完成",postData)
    })

    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


