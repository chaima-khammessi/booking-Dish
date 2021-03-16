addDishToCart
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const cartItemSchema = mongoose.Schema({

    dishId: String,
    quantity: Number
});

cartItemSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
const cartItem = mongoose.model('CartItem', cartItemSchema)
module.exports = cartItem;