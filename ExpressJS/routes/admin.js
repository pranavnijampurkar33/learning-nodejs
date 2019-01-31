const express = require("express");
const Router = express.Router();
const adminController = require('../controllers/admin');

// /admin/add-product GET
Router.get('/add-product',adminController.getAddProduct);

// /admin/products GET 
Router.get('/products',adminController.getProducts);

// /admin/add-product POST 
Router.post('/add-product',adminController.postAddProduct);

module.exports = Router;