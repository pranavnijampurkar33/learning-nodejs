const http = require('http');
const fs = require('fs');
var httpServer = http.createServer((req,res) => {
    var url = req.url;
    var method = req.method;
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>Submit the form</title></head><body><form  action='/message' method='POST'><input type='text' name='message'><button type='Submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method=='POST'){
        fs.writeFileSync('routeReq1.txt','TEMP DATA');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title></title></head><body><h1>Hello I am here</h1></body>");
    res.write("</html>");
    res.end();
});

httpServer.listen('4000');