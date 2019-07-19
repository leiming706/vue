const http = require("http")

http.createServer( (rq,response)=>{

    // response.write("hello")
    // response.end()
    response.end("hooooo")
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


