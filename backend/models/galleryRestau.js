const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const gallerySchema = mongoose.Schema({
    name: String,
    adress: String,
    img: String,
    userId: String,
    status: String,
    verif: String
});

gallerySchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})
const gallery = mongoose.model('Gallery', gallerySchema)
module.exports = gallery;