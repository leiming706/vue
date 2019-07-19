const http = require("http")

http.createServer( ()=>{
    console.log("访问中")
}).listen(8080,()=>{
    console.log("服务器启动")
})


