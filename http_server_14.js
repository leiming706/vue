const http = require("http")
const queryString = require("querystring")

http.createServer( (request,response)=>{
    let GET = {}
    let urlInfo = request.url

    if(urlInfo.indexOf("?")!==-1) {

    let getArgs = urlInfo.split("?")
    
    GET = queryString.parse(getArgs[1])

    console.log(GET)
    }
    response.end()
    
}).listen(9090,()=>{
    console.log("服务器启动")
})


