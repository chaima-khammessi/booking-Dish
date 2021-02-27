const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dishSchema = mongoose.Schema({
    name: String,
    price: String,
    ingredient: String,
    calorie: String,
    img: String,
    description: String,
    category:String,
    userId: String,
    status: String,
    verif:String
});

dishSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
const dish = mongoose.model('Dish', dishSchema)
module.exports = dish;