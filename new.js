const http =require("http");

http.createServer((req,res)=>{
res.write("This is my frts program ");
res.end()
}).listen(8000);