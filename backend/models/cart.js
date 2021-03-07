
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const cartSchema = mongoose.Schema({
    //items:Array<CartItem>[],
    userId: String,
    status: String,
    verif:String
   
});

cartSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
const cart = mongoose.model('Cart', cartSchema)
module.exports = cart;