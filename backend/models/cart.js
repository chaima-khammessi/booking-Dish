
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const cartSchema = mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  status: String,
  verif: String,
  priceTotal: Number,
  dishs: [
    {
      dishId: Number,
      quantity: Number,
      name: String,
      price: Number
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
})

cartSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})
const cart = mongoose.model('Cart', cartSchema)
module.exports = cart;