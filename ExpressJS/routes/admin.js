const express = require("express");
const Router = express.Router();
const productsController = require('../controllers/products');
// /admin/add-product 
Router.use('/add-product',productsController.getAddProduct);

// /admin/product
Router.post('/product',productsController.postAddProduct);

module.exports = Router;