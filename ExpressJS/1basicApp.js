//const http = require("http");
const express = require("express");
const app = express();

app.use((req,res,next) => {
    console.log("1st middleware code");
    next();
});

app.use((req,res,next)=>{
    console.log("2nd middleware code");
    res.send('<h1>Hey there <h2>');
    next();
});

//var httpServer = http.createServer(app);
//httpServer.listen("3333");
app.listen("3333"); //This also start the server like implemented in 
                    //above 2 lines. The same think used behind this 
                    //function. Hence, removed require('http')
console.log("Server listening at 3333");