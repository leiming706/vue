const http = require("http")
const url = require("url")

http.createServer( (request,response)=>{
    let GET = {}
    

    if(request.url.indexOf("?")!==-1) {

    
    
    GET = url.parse(request.url,true).query

    console.log(GET)
    }
    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


