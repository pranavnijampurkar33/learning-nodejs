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

var listener = app.listen(3322);
console.log("Port used: "+listener.address().port);
console.log();