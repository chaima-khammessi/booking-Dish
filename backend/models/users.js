//Require Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//Define a schema
const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    adress: String,
    email: String,
    pwd: String,
    confPwd: String,
    tel: Number,
    specialityChef: String,
    expChef: String,
    faxCompany: Number,
    mfCompany: String,
    domainCompany: String,
    userType: String



});
userSchema.pre('save', function (next) {
    if (this.pwd) {
        let salt = bcrypt.genSaltSync(10)
        this.pwd = bcrypt.hashSync(this.pwd, salt)
    }
    next()
})
// Compile model from schema
const user = mongoose.model('Users', userSchema);
module.exports = user
















