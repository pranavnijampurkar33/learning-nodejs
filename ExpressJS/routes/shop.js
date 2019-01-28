const express = require('express');
const Router = express.Router();
const productController = require('../controllers/products');

Router.get('/',productController.getProducts);

module.exports = Router;