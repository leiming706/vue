const http = require("http")
const url = require("url")

http.createServer( (request,response)=>{
   let postData = ""
   let i = 0
    request.on("data",(_post)=>{
        
        console.log("组合"+(++i)+"次")
        postData += _post

    })

    request.on("end",()=>{
        console.log("post完成")
    })

    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


