const express = require("express");
const Router = express.Router();
const adminController = require('../controllers/admin');

// /admin/add-product GET
Router.get('/add-product',adminController.getAddProduct);

// /admin/edit-product GET
Router.get('/edit-product/:productId',adminController.getEditProduct);

// /admin/edit-product POST
Router.get('/edit-product',adminController.postEditProduct);

// /admin/products GET 
Router.get('/products',adminController.getProducts);

// /admin/add-product POST 
Router.post('/add-product',adminController.postAddProduct);

module.exports = Router;