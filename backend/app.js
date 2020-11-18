const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const app = express();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const User = require('./models/users');


//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// add user in collections from FE
app.post('/addUser', (req, res) => {
    console.log('users added from FE', req.body);
    const user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        adress: req.body.adress,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd,
        tel: req.body.tel,
        mfCompany: req.body.mfCompany,
        faxCompany: req.body.faxCompany,
        domainCompany: req.body.domainCompany,
        expChef: req.body.expChef,
        specialityChef: req.body.specialityChef,
        userType: req.body.userType


    });
    user.save((error, users) => {
        if (error) {
            console.log(error);
        }
        else {
            let payload = { subject: users._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token });
        }
    })
});



app.get('/allUser', async (req, res) => {
    try {
        let user = await Users.find();

        res.status(200).json({
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }

});
// search user by email from collections: (req.body.email received from FE)
app.post("/addLogin", (req, res) => {
    User.findOne({ email: req.body.emailLogin })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "Authentification Problem",
                });
            }
            return bcrypt.compare(req.body.pswLogin, data.pwd);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "0",
                });
            }
            User.findOne({ email: req.body.emailLogin }).then((data) => {
                res.status(200).json({
                    message: "1",
                    userType: data.userType
                });
            });

        });
});


module.exports = app;
