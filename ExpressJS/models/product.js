//const products = [];
const path = require('path');
const fs = require('fs');
const rootDir = require('../utils/path');
const p = path.join(rootDir,
    'data',
    'products.json'
);
const getProductFromFile = (cb) =>{
    let products = [];
    fs.readFile(p,(err,fileContent) => {
        if (err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};
module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl= imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
        this.id = Math.random().toString();
        console.log(this.id);
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('Wrote successfully');
            });
        });

    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }

    static findById(id,cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}