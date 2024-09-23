const http=  require("http");

http.createServer((req,res)=>{
    res.write("<h1>This is node second program in hello.js file");
    res.write("<h1>This is second line")
    res.end();
    
}).listen(8000)