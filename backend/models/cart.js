
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const cartSchema = mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  dishes: [
    {
      dishId: Number,
      quantity: Number,
      name: String,
      price: Number
    }
  ],
  active: {
    type: Boolean,
    default: true
  },
  modifiedOn: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true }
);

cartSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})
const cart = mongoose.model('Cart', cartSchema)
module.exports = cart;