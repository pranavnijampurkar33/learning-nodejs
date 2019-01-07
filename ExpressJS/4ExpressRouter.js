//Uses Routes folder
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next) => {
    res.status(404).send("<h1>Page not found </h1>");
});

app.listen(3322,() => {
    //console.log("this.port()");
});