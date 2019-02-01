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
exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId; //We can access productId bcoz we have mentioned 
    //this param in the routes/shop.js after the  colon -> Router.get('/products/:productId');
    Product.findById(prodId, product => {
        //console.log(product);
        res.render('shop/product-detail',{
            product: product,
            path:'/products',
            pageTitle: product.title
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

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    res.render('shop/cart',{ 
        pageTitle:'Your Cart',
        path: '/cart'
    });
}

exports.getOrders = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/orders',{ 
            pageTitle:'Your Orders',
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