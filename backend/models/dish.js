const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    name: String,
   price: String,
    ingredient: String,
    calorie:String,
    img: String,
    description:String,
   


});
const dish = mongoose.model('Dish', dishSchema)
module.exports = dish;