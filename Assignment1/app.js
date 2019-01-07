const http = require('http');
//const fs = require('fs');

const httpServer = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        console.log("inside if /");
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="create-user" method="POST"><input type="text" name="message"><button type="Submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method == 'POST'){
        const body = [];
        console.log("in if /create-user");
        req.on('data',(chunk) => {
            console.log("in if /create-user");
            console.log(chunk);
            body.push(chunk);            
        });
        req.on('end',() => {
            var allUsers = Buffer.concat(body).toString();
            console.log(allUsers);
        })
        res.statusCode = 302;               ///VERY IMPORTANT AS YOU ARE ABOUT TO REDIRECT
        res.setHeader('Location','/users');
        return res.end();
        
    }
    if(url === '/users'){
        console.log("in if /users");
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.statusCode = 302;  
    res.setHeader('Content-Type','text/html');
    res.setHeader('Location','/');
    res.end("See you next time");
});
httpServer.listen(3000);