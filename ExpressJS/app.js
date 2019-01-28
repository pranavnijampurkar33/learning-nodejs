//Uses Routes folder
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({
    layoutsDir: 'views/layouts/',
    defaultLayout:'main-layout',
    extname: 'handlebars'                     
    //default -> extname=handlebars so if we do not mention this it will be ok 
    // BUT if we change name of ext in app.engine and set view engine some diff value like 'hbs'
    //We have to pass the extname explicitly as while using layout it check defaul 'handlebars' 
    //layout if we do not mention extname
}));
app.set('view engine','handlebars');
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