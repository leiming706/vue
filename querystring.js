const queryString = require("querystring")

let getInfo = "username=sa&age=113"

let obj =  queryString.parse(getInfo)

console.log(obj)