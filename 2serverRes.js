const http = require('http');

var httpServer = http.createServer((req,res) => {
    res.setHeader('Content-Type','text\html');
    res.write("<html>");
    res.write("<head><title></title></head><body><h1>Hello I am here</h1></body>");
    res.write("</html>");
    res.end();
});

httpServer.listen(3000);

//See routeReq.js