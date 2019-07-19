const http = require("http")

http.createServer( (rq,response)=>{

    response.write("hello")
    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


