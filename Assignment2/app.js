const express = require("express");
const appServer = express();
appServer.use('/users',(req,res,next) => {
    console.log("In use 1");
    res.send("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
});
appServer.use('/',(req,res,next) => {
    console.log("In use 2");
    res.send("<H1>Inside / path</H1>");
});
appServer.listen(3366);
console.log("Listening at 3366");
