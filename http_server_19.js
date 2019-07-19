const http = require("http")
const queryString = require("querystring")

http.createServer( (request,response)=>{
   let postData = ""
    request.on("data",(_post)=>{
        postData += _post

    })

    request.on("end",()=>{
        // console.log("post完成",postData)
        let POST = queryString.parse(postData)
        console.log(POST.title,POST.content)
    })

    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


