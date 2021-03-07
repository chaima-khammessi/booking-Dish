const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const menuSchema = mongoose.Schema({
    name: String,
    price: String,
    ingredient: String,
    img: String,
    category:String,
    userId: String,
    status: String,
    verif:String
   
});

menuSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
const menu = mongoose.model('Menu', menuSchema)
module.exports = menu;