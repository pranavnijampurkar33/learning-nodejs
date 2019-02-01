const Product = require('../models/product')

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true
    });
}
exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,description,price);   
    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next) => {
    res.render('admin/edit-product',{
        pageTitle: 'Add Product', 
        path: '/admin/edit-product',
    });
}

exports.getProducts =  (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products',{ 
            pageTitle:'Admin Products',
            products: products,
            path: '/admin/products'
        });
    });
}