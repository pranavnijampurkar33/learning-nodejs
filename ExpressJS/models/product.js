const db = require('../utils/database');

const Cart = require('./cart');


module.exports = class Product {
    constructor(id,title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl= imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
        return db.execute(
            "INSERT INTO products (`title`, `price`, `description`, `imageUrl`) VALUES (?,?,?,?)",
            [this.title, this.price, this.imageUrl, this.description]    
        );
    }
    static deleteById(id) {
        
    }
    static fetchAll() {
        return db.execute("SELECT * FROM products");
    }
    static findById(id) {
        return db.execute(
            "SELECT * from products WHERE id=?",[id]
        );
    }

}