const Product = require('../models/product')

exports.getAddProduct = (req,res,next) => {
    res.render('admin/edit-product',{
        pageTitle: 'Add Product', 
        path: '/admin/edit-product',
        editing: false
    });
}
exports.postAddProduct = (req,res,next) => {
    const id = null;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(id, title,imageUrl,description,price);   
    product.save();
    res.redirect('/');
}
exports.getEditProduct = (req,res,next) => {
    //console.log("I returned from getEditProduct() 0");
    const editMode = req.query.edit; 
    if(!editMode) {
        console.log("I returned from getEditProduct() 1")
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    //console.log(prodId);
    Product.findById(prodId, product => {
        if(!product){
            //console.log("I returned from getEditProduct() 2")
            return res.redirect('/');
        }     
        res.render('admin/edit-product',{
            product: product,
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product',
            editing: editMode
        });
    });    
}
exports.postEditProduct = (req,res,next) => {
    const id = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const updatedProduct = new Product(id,title,imageUrl,description,price);   
    updatedProduct.save();
    res.redirect('/admin/products');
    console.log("In postEditProduct()",title,imageUrl,price,description);
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

exports.postDeleteProducts = (req,res,next) => {
    const id = req.body.productId;
    Product.deleteById(id);
    res.redirect('/admin/products');
}