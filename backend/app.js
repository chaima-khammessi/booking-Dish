const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const app = express();
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const User = require('./models/users');
const Admin=require('./models/admin');
const Dish=require('./models/dish');


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

// add admin in collections from FE
app.post('/addAdmin', (req, res) => {
    console.log('admins added from FE', req.body);
    const admin = new Admin({
        fullName: req.body.fullName,
        emailAdmin:req.body.emailAdmin,
        userAdmin:req.body.userAdmin,
        pwdAdmin:req.body.pwdAdmin,
        confPwdAdmin:req.body.confPwdAdmin

    });
   admin.save((error, admin) => {
        if (error) {
            console.log(error);
        }
        else {
            let payload = { subject: admin._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token });
        }
    })
});

app.get('/allDishs', (req, res) => {
    Dish.find((err, findedDish) => {
        console.log('All Dishs', findedDish);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Dishs',
            dish: findedDish
        })
    })
})
app.post('/addDish', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const dish = new Dish({
        name: req.body.name,
        price: req.body.price,
        ingredient: req.body.ingredient,
        calorie:req.body.calorie,
        img: url + ('/images/' + req.file.filename),
        description:req.body.description

    });
    dish.save();
    res.status(200).json({
        message: "dish added successfuly"
    })
});



app.delete('/deleteDish/:id', (req, res) => {
    console.log('delete dish by ID', req.params._id);
    Dish.deleteOne({_id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Dish deleted successfully'
                });
            }
        }
    );
});

app.get('/allDishs/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Dish.findOne({_id: req.params.id }).then(
        dish => {
            console.log('Finded Dish', dish);
            res.status(200).json({
                message: 'this is the dish',
                dish: dish
            })
        }
    )
})

app.put('/editDish/:id', (req, res) => {
    console.log('Update Dish By ID', req.params.id);
    Dish.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, dish) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(dish);
        }
);
})



/*app.get('/allUser', async (req, res) => {
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

});*/
app.get('/allUser', (req, res) => {
    console.log(('well received in BE'));
    User.find((err, documents) => {
        console.log('All user', documents);
        res.status(200).json({
            message: 'Here all Users',
            users: documents,

        })
    });
})
/******* Get All Admin******** */
app.get('/allAdmin', (req, res) => {
    console.log(('well received in BE'));
    Admin.find((err, documents) => {
        console.log('All Admin', documents);
        res.status(200).json({
            message: 'Here all Admin',
            admin: documents,

        })
    });
})


    
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

/******************  search admin by email from collections: (req.body.email received from FE)********************* */


app.post("/addLoginAdmin", (req, res) => {
    Admin.findOne({ emailAdmin: req.body.emailLoginAdmin })
        .then((data) => {
            console.log("data", data);
            if (!data) {
                res.status(200).json({
                    message: "Authentification Problem",
                });
            }
            return bcrypt.compare(req.body.pwdLoginAdmin, data.pwdAdmin);
        })
        .then((result) => {
            if (!result) {
                res.status(200).json({
                    message: "0",
                });
            }
            Admin.findOne({ emailAdmin: req.body.emailLoginAdmin }).then((data) => {
                res.status(200).json({
                    message: "1",
                    admin: data.admin
                });
            });

        });
});


app.get('/logoutAdmin',(req, res)=>{
    console.log('delete admin', req.params._id);
    Admin.findByIdAndRemove(req.params._id, function(err){
    if(err) res.send(err);
    res.status(200).json({ message: 'Admin Deleted!'});
   })
});




module.exports = app;
