//Find below comments where event driven is used
const http = require('http');
const fs = require('fs');

var app = http.createServer((req,res) => {
    var method = req.method;
    var url = req.url;
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>Submit the form</title></head><body><form  action='/message' method='POST'><input type='text' name='message'><button type='Submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if(url === '/message' && method == 'POST'){
        const body = [];
        //Event has been set on 'data' of req. 
        //Node will provide the event listener internally.
        //This listener asyncly checks if data and executes the code in the function
        req.on('data',(chunk) => {  
            console.log(chunk);
            body.push(chunk);
        });
        //Event has been set on 'end' of req. 
        //Node will provide the event listener internally.
        //This listener asyncly checks if data and executes the code in the function
        
        req.on('end',() => {
            var parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            fs.writeFileSync('4reqBodies.txt',parseBody.split('=')[1]);
        })
        //fs.writeFileSync('4reqBodies.txt','Hello there');
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
app.listen(5000);