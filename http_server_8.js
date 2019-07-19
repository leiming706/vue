const http = require("http")

http.createServer( (request,response)=>{

    switch(request.url){
        case "/a.html":
            response.write("this is"+request.url)
            break
        case "/b.html":
            response.write("that is"+request.url)
            break
        default:
            response.write("404")            
    }
    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


