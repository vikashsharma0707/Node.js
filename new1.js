const http = require("http");


http.createServer((req,res)=>{
 res.write("<h1>This is new1 file")
 res.end();
}).listen(4000) 