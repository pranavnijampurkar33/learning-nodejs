const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = (req,res,next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('shop/product-list',{ 
                pageTitle:'Products',
                products: rows,
                path: '/products'
            });
        })
        .catch(err => {
            console.log(err);
        });   
}
exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId; //We can access productId bcoz we have mentioned 
    //this param in the routes/shop.js after the  colon -> Router.get('/products/:productId');
    Product.findById(prodId)
    .then(([product]) => {
        res.render('shop/product-detail',{
            product: product[0],
            path:'/products',
            pageTitle: product[0].title
        });  
    }).catch(err => {
        console.log(err);
    });
                             
}
exports.errorProduct = (req,res,next) => {
    res.status(404).render('404',{
        pageTitle: '404 page not found',
        error404CSS: true
    });
}

exports.getIndex = (req,res,next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('shop/index',{ 
                pageTitle:'Home',
                products: rows,
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
        });    
}

exports.getCart = (req,res,next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {     
            const cartProducts = [];       
            for(product of products){       
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                console.log(cartProductData);
                if(cartProductData){
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                    console.log("test cartProducts.push")
                }
            }
            res.render('shop/cart',{ 
                pageTitle:'Your Cart',
                path: '/cart',
                products: cartProducts
            });
        }); 
    })    
}

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId,product.price);
    });
    res.redirect('/cart');
}

exports.postCartdeleteProduct = (req,res,next) =>{
    const prodId = req.body.productId;
    console.log('controller shop -> deleteCartItem ',prodId);
    Product.findById(prodId,product => {
        Cart.deleteProduct(prodId,product.price);
    });    
    res.redirect('/cart');
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