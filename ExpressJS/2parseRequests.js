//Introduction of 3rd party body-parser package
const express = require("express");
const bodyParser = require("body-parser");
const appServer = express();

appServer.use(bodyParser.urlencoded({extended: false}));

appServer.use('/add-product',(req,res,next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='Product' id='product'><button type='submit'>Add</button></form>");
});
appServer.use('/product',(req,res,next) => {
    console.log(req.body);
    res.send("<h1>You added</h1>");
});
appServer.use('/',(req,res,next) => {
    res.send("<h1>Last middleware</h1>");
});
appServer.listen("3311");
console.log("Server listening at 3311");