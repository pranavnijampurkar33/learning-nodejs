//Uses Routes folder
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next) => {
    var error404 = path.join(__dirname,'views','404.htm');
    console.log(error404);
    res.status(404).sendFile(error404);
});

app.listen(3322,() => {
    console.log("Using port: 3322");
});