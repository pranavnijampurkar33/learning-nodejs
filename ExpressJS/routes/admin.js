const express = require("express");
const path = require("path");
const Router = express.Router();
const rootDir = require("../utils/path");
// /admin/add-product 
Router.use('/add-product',(req,res,next) => {
    //res.send("<form action='/admin/product' method='POST'><input type='text' name='Product' id='product'><button type='submit'>Add</button></form>");
    res.sendFile(path.join(rootDir,'views','add-product.htm'));
});

// /admin/product
Router.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = Router;