const { strict } = require('assert');
const mongoose = require('mongoose');

const consumerSchema = mongoose.Schema({
    fName: String,
    lName: String,
    adress: String,
    email: String,
    pwd: String,
    confPwd: String,
    tel: Number

});

const consumer = mongoose.model('consumers', consumerSchema);

const chefSchema = mongoose.Schema({
    firstNameChef: String,
        lastNameChef: String,
        adressChef:String,
        emailChef:String,
        expChef:String,
        pwdChef: String,
        confPwdChef: String,
        specialityChef:String,

});
const chef = mongoose.model('chefs', chefSchema);

const companySchema = mongoose.Schema({
    nameCompany: String,
    mfCompany: String,
    adressCompany: String,
    emailCompany:String,
    pwdCompany: String,
    confPwdCompany:String,
    telCompany: Number,
    faxCompany: Number,
    domainCompany: String

});

const company = mongoose.model('companys', companySchema);


module.exports = {consumer: consumer ,chef: chef , company: company } 








