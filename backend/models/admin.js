//Require Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { stringify } = require('querystring');

//Define a schema
const adminSchema = mongoose.Schema({
    fullName: String,
    emailAdmin: String,
    userAdmin: String,
    pwdAdmin: String,
    confPwdAdmin: String
});
adminSchema.pre('save', function (next) {
    if (this.pwdAdmin) {
        let salt = bcrypt.genSaltSync(10)
        this.pwdAdmin = bcrypt.hashSync(this.pwdAdmin, salt)
    }
    next()
})
// Compile model from schema
const admin = mongoose.model('Admin', adminSchema);
module.exports = admin
















