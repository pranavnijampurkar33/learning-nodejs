var products=[];

exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true
    });
}
exports.postAddProduct = (req,res,next) => {
    products.push({title: req.body.title});
    res.redirect('/');
}
exports.getProducts = (req,res,next) => {
    console.log('shop.js',products);
    products = products;
    res.render('shop',{ 
        pageTitle:'Home',
        products: products, 
        docTitle: 'Book Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true
    });
}
exports.errorProduct = (req,res,next) => {
    res.status(404).render('404',{
        pageTitle: '404 page not found',
        error404CSS: true
    });
}