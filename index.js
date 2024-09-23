const http = require("http");

http.createServer(function(req, res){
    res.write("welcome to  nodejs first  program  ");
    res.end()
}).listen(9000);