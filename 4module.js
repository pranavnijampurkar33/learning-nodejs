const http = require('http');
const fs = require('fs');
var routes = (req,res) => {
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
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            var parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            fs.writeFileSync('4reqBodies.txt',parseBody.split('=')[1]);
        })
        //fs.writeFileSync('4reqBodies.txt','Hello there');
        res.statusCode = 302; ///********* * VERY IMPORTANT AS YOU ARE ABOUT TO REDIRECT
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title></title></head><body><h1>Hello I am here</h1></body>");
    res.write("</html>");
    res.end();  
}

module.exports = {
    handler : routes,
    someText : "Here is you text"
};
module.exports.anotherText = "Another one";
//Either above declarations or use below
//exports.oneMore = "One more declaration";