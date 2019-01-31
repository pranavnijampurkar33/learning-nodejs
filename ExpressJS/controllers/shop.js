const Product = require('../models/product')

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{ 
            pageTitle:'Home',
            products: products, 
            docTitle: 'Book Shop', 
            path: '/products'
        });
    });
}
exports.errorProduct = (req,res,next) => {
    res.status(404).render('404',{
        pageTitle: '404 page not found',
        error404CSS: true
    });
}

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index',{ 
            pageTitle:'Home',
            products: products,
            path: '/'
        });
    });
}

exports.getCart = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/cart',{ 
            pageTitle:'Your Cart',
            path: '/cart'
        });
    });
}

exports.getOrders = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/orders',{ 
            pageTitle:'Your Cart',
            path: '/orders'
        });
    });
}

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
        pageTitle:'Checkout',
        path:'/checkout'
    });
}