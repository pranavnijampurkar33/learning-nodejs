//Uses Routes folder
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.error404);

var listener = app.listen(3322,() => {
    console.log("Using port: "+listener.address().port);
    console.log("You can visit below paths");
    console.log("localhost:3322/admin/add-product");
    console.log("localhost:3322/admin/product : POST");
    console.log("localhost:3322/ : GET");
});