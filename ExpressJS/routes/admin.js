const express = require("express");
const Router = express.Router();
const adminController = require('../controllers/admin');

// /admin/add-product GET
Router.get('/add-product',adminController.getAddProduct);

// /admin/add-product POST 
Router.post('/add-product',adminController.postAddProduct);

// /admin/products GET 
Router.get('/products',adminController.getProducts);

// /admin/edit-product GET
Router.get('/edit-product/:productId',adminController.getEditProduct);

// /admin/edit-product POST
Router.post('/edit-product',adminController.postEditProduct);

// /admin/delete-product POST
Router.post('/delete-product',adminController.postDeleteProducts);


module.exports = Router;