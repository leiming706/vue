const http = require("http")

http.createServer( (request,response)=>{
    let GET = {}
    let urlInfo = request.url

    if(urlInfo.indexOf("?")!==-1) {

    let getArgs = urlInfo.split("?")
    let queryArgs = getArgs[1].split("&")

    for(var i=0;i<queryArgs.length;i++){
        let kv = queryArgs[i].split("=")
        GET[kv[0]] = kv[1]
    }

    console.log(GET)
    }
    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


