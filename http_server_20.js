const http = require("http")
const fs = require("fs")

http.createServer( (request,response)=>{
  
    if (request.url === '/index.html' || request.url === '/' ){
        fs.readFile("./htdocs/index.html","utf8",(err,data)=>{
            if(!err){
                response.write(data)
            }else{
                response.write("404")
            }
            response.end()
        })
    }
        
    
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


