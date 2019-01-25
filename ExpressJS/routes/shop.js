const express = require('express');
const path = require('path');
const Router = express.Router();
const rootDir = require('../utils/path');
const adminData = require('./admin');

Router.get('/',(req,res,next) => {
    console.log('shop.js',adminData.products);
    products = adminData.products;
    //res.sendFile(path.join(rootDir,'views','shop.htm'));
    res.render('shop',{ pageTitle:'Home',products: products, docTitle: 'Book Shop', path: '/'});
});

module.exports = Router;