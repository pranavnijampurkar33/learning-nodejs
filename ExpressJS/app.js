//Uses Routes folder
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const exphbs = require('express-handlebars');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req,res,next) => {
    //var error404 = path.join(__dirname,'views','404.htm');
    //console.log(error404);
    //res.status(404).sendFile(error404);
    res.status(404).render('404',{
        pageTitle: '404 page not found',
        error404CSS: true
    });
});

app.listen(3322,() => {
    console.log("Using port: 3322");
    console.log("You can visit below paths");
    console.log("localhost:3322/admin/add-product");
    console.log("localhost:3322/admin/product : POST");
    console.log("localhost:3322/ : GET");
});